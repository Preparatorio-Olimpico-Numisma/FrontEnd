/* eslint-disable camelcase */
import { BaseApi } from './ConfigApi';
import { UserProps } from './@types/index';

export type AlterUserProps = Omit<UserProps, 'role' & 'date_joined'>;

export async function AlterUser(user: AlterUserProps) {
  try {
    const response = await BaseApi.put('/api/user/alter/user/', {
      user,
    });
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data.message);
    }
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
}
