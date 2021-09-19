import { useContext } from 'react';
import AuthContext from '../context/auth';

export function useAuthContext() {
  const auth = useContext(AuthContext);
  return auth;
}
