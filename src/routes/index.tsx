import { Load } from '../components/Load';
import { useAuthContext } from '../hooks/useAuth';
import { AppRoutes } from './app';
import { AuthRoutes } from './auth/AuthRoutes';

export function Routes() {
  const { isAuthenticated, loading } = useAuthContext();

  if (loading) return <Load />;

  return isAuthenticated ? <AuthRoutes /> : <AppRoutes />;
}
