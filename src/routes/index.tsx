import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/auth';
import { useAuthContext } from '../hooks/useAuth';
import { AppRoutes } from './app';
import { AuthRoutes } from './auth/AuthRoutes';

export function Routes() {
  const { isAuthenticated, loading } = useAuthContext();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        {isAuthenticated ? <AuthRoutes /> : <AppRoutes />}
      </BrowserRouter>
    </AuthProvider>
  );
}
