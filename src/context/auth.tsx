import { createContext, ReactNode, useState, useEffect } from 'react';
import { SignUpProps, UserProps } from '../services/API/@types';
import { ApiMethods } from '../services/API';
import { BaseApi } from '../services/API/ConfigApi';

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextData = {
  isAuthenticated: boolean;
  user: UserProps | null;
  loading: boolean;
  SignIn(email: string, password: string): Promise<void>;
  SignOut(): void;
  SignUp(data: SignUpProps): Promise<void>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoad, setIsLoad] = useState(true);

  function ParseJSON(value: string) {
    return JSON.parse(value);
  }

  useEffect(() => {
    (async () => {
      const UserString = localStorage.getItem('Numisma@User');
      const AccessToken = localStorage.getItem('Numisma@AccessToken');
      const RefreshToken = localStorage.getItem('Numisma@RefreshToken');

      if (UserString && AccessToken && RefreshToken) {
        const UserData = ParseJSON(UserString);
        const access = await ApiMethods.checkToken(RefreshToken);
        const userJson = JSON.parse(UserData);

        setUser(userJson);

        localStorage.setItem('@IoT.AccessToken', access);
        BaseApi.defaults.headers.Authorization = `Bearer ${AccessToken}`;
        BaseApi.defaults.headers['X-Refresh-Token'] = RefreshToken;
      }
      setIsLoad(false);
    })();
  }, []);

  async function SignIn(email: string, password: string) {
    const json = await ApiMethods.SignIn({ email, password });
    if (!json.access) throw new Error('Email ou senha incorretos');
    const { access, refresh } = json;
    BaseApi.defaults.headers.Authorization = `Bearer ${access}`;

    const data = await ApiMethods.GetData(email, password);
    if (!data) throw new Error('Email ou senha incorretos');

    const userData = data;

    localStorage.setItem('@IoT.User', JSON.stringify(userData));
    localStorage.setItem('@IoT.AccessToken', access);
    localStorage.setItem('@IoT.RefreshToken', refresh);

    setUser(userData);
  }

  async function SignUp(data: SignUpProps): Promise<void> {
    const { sucess } = await ApiMethods.SignUp(data);
    if (!sucess) throw new Error('Não foi possível fazer o cadastro');
    await SignIn(data.email, data.password);
  }

  async function SignOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        SignIn,
        SignOut,
        SignUp,
        user,
        loading: isLoad,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
