import { ResponseSignIn, SignInProps } from './@types';
import { BaseApi } from './ConfigApi';

export async function SignIn(props: SignInProps) {
  try {
    const response = await BaseApi.post('/api/token/', props);
    if (response.status < 200 || response.status >= 300)
      throw new Error('Email ou senha incorretos');

    const data: ResponseSignIn = await response.data;
    return data;
  } catch (error: any) {
    // verify network error
    if (error.name === 'NetworkError') {
      return 'Verifique sua conexão';
    }

    return error;
  }
}
