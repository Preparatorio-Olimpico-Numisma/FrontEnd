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

const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    (async () => {
      const UserString = localStorage.getItem('@Numisma.User');
      const AccessToken = localStorage.getItem('@Numisma.AccessToken');
      const RefreshToken = localStorage.getItem('@Numisma.RefreshToken');

      if (UserString && AccessToken && RefreshToken) {
        const userJson = JSON.parse(UserString);
        const access = await ApiMethods.checkToken(RefreshToken);
        setUser(userJson);
        localStorage.setItem('@Numisma.AccessToken', access);
        BaseApi.defaults.headers.Authorization = `Bearer ${AccessToken}`;
      }
      setIsLoad(false);
    })();
  }, []);

  async function SignIn(email: string, password: string) {
    const json = await ApiMethods.SignIn({ email, password });

    if (!json.access) throw new Error('Email ou senha incorretos');
    const { access, refresh } = json;
    BaseApi.defaults.headers.Authorization = `Bearer ${access}`;

    const data: UserProps = {
      access: json.access,
      cpf: '000.000.000-00',
      created_at: '2020-08-20T18:00:00.000Z',
      email: 'a@A',
      first_name: 'a',
      id: 1,
      last_name: 'a',
      refresh: json.refresh,
      updated_at: '2020-08-20T18:00:00.000Z',
    };

    // await ApiMethods.GetData(email, password);

    if (!data) throw new Error('Email ou senha incorretos');

    localStorage.setItem('@Numisma.User', JSON.stringify(data));
    localStorage.setItem('@Numisma.AccessToken', access);
    localStorage.setItem('@Numisma.RefreshToken', refresh);

    setUser(data);
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
