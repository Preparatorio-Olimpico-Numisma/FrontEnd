import { useAuthContext } from '../../../hooks/useAuth';

export function Dashboard() {
  const { user } = useAuthContext();
  return (
    <div>
      <h1>
        Seja Bem-Vindo <strong>{user?.first_name}</strong>
      </h1>
      <h2>hey</h2>
    </div>
  );
}
