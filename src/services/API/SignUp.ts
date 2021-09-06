import { ResponseSignUp, SignUpProps } from './@types';
import { BaseApi } from './ConfigApi';

export async function SignUp(props: SignUpProps): Promise<ResponseSignUp> {
  const response = await BaseApi.post(
    '/api/user/register/',
    JSON.stringify(props)
  );

  const { message, sucess, error }: ResponseSignUp = response.data;
  if (sucess === false) throw new Error(error);
  if (response.status < 200 || response.status > 300)
    throw new Error('Não foi possível fazer o cadastro');
  return { message, sucess, error };
}
