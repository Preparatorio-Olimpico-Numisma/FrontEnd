import { createContext, ReactNode, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { SignUpProps, UserProps } from '../services/API/@types';
import { ApiMethods } from '../services/API';
import { BaseApi } from '../services/API/ConfigApi';
import { AlterUserProps } from '../services/API/AlterUser';

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
  AlterUser(data: UserProps): Promise<void>;
};

const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoad, setIsLoad] = useState(true);
  const history = useHistory();

  function SignOut() {
    localStorage.removeItem('@Numisma.User');
    localStorage.removeItem('@Numisma.AccessToken');
    localStorage.removeItem('@Numisma.RefreshToken');
    setUser(null);
  }

  useEffect(() => {
    (async () => {
      try {
        setIsLoad(true);
        const UserString = localStorage.getItem('@Numisma.User');
        const AccessToken = localStorage.getItem('@Numisma.AccessToken');
        const RefreshToken = localStorage.getItem('@Numisma.RefreshToken');

        if (UserString && AccessToken && RefreshToken) {
          const userJson = JSON.parse(UserString);
          const access = await ApiMethods.checkToken(RefreshToken);
          setUser(userJson);
          localStorage.setItem('@Numisma.AccessToken', access);
          BaseApi.defaults.headers.Authorization = `Bearer ${access}`;
        }
        setIsLoad(false);
      } catch (error: any) {
        history.replace('/');
        setIsLoad(false);
        SignOut();
      }
    })();
  }, [history]);

  useEffect(() => {
    setIsLoad(true);
    localStorage.setItem('@Numisma.User', JSON.stringify(user));
    setIsLoad(false);
  }, [user]);

  async function SignIn(email: string, password: string) {
    setIsLoad(true);
    const json = await ApiMethods.SignIn({ email, password });

    if (!json.access) throw new Error('Email ou senha incorretos');
    const { access, refresh } = json;
    BaseApi.defaults.headers.Authorization = `Bearer ${access}`;

    const data: UserProps = await ApiMethods.GetData();

    if (!data) throw new Error('Email ou senha incorretos');

    localStorage.setItem('@Numisma.User', JSON.stringify(data));
    localStorage.setItem('@Numisma.AccessToken', access);
    localStorage.setItem('@Numisma.RefreshToken', refresh);

    setUser(data);
    setIsLoad(false);
    history.replace('/');
  }

  async function SignUp(data: SignUpProps): Promise<void> {
    const { sucess } = await ApiMethods.SignUp(data);
    if (!sucess) throw new Error('Não foi possível fazer o cadastro');
    await SignIn(data.email, data.password);
  }

  async function AlterUser(data: AlterUserProps) {
    const { sucess } = await ApiMethods.AlterUser(data);
    if (!sucess) throw new Error('Não foi possível alterar o usuário');
    setUser(data);
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
        AlterUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
