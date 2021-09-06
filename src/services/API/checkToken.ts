import { BaseApi } from './ConfigApi';

export async function checkToken(TokenRefresh: string) {
  const response = await BaseApi.post('/user/refresh', { Token: TokenRefresh });
  if (response.status < 200 || response.status >= 300) {
    throw new Error(response.statusText);
  }
  const data = await response.data;
  return data;
}
