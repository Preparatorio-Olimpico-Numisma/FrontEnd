import { BaseApi } from './ConfigApi';

export function ForgotPassword(email: string) {
  const response = BaseApi.post('/forgot-password', { email });
  return response;
}
