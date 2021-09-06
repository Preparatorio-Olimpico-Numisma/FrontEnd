import { ResponseSignIn, SignInProps } from './@types';
import { BaseApi } from './ConfigApi';

export async function SignIn(props: SignInProps) {
  const response = await BaseApi.post('/api/token/', props);

  if (response.status < 200 || response.status >= 300)
    throw new Error('Não foi possível fazer o login');

  const data: ResponseSignIn = await response.data;
  return data;
}
