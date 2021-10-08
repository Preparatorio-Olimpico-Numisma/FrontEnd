/* eslint-disable camelcase */
import { BaseApi } from './ConfigApi';
import { UserProps } from './@types/index';
import { GetData } from './GetData';

export type AlterUserProps = Omit<UserProps, 'role' & 'date_joined'>;

export async function AlterUser(user: AlterUserProps) {
  const response = await BaseApi.put('/api/user/alter/user/', {
    user,
  });
  if (response.status < 200 || response.status >= 300) {
    throw new Error(response.data.message);
  }
  const data = await response.data;
  const userData = await GetData();
  console.log(userData);
  console.log(user);
  return data;
}
