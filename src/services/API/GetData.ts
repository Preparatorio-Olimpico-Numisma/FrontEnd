import { BaseApi } from './ConfigApi';

export async function GetData(email: string, password: string) {
  const response = await BaseApi.post('/user/getdata');
  const data = await response.data;
  return data;
}
