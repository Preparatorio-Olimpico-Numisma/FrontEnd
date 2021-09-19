import { BaseApi } from './ConfigApi';

export async function GetData() {
  const response = await BaseApi.get('/api/user/getdata/');
  const data = await response.data;
  return data.user;
}
