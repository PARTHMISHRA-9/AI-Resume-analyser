import { useAuth } from '../context/AuthContext';

const useProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  return { isAuthenticated, loading };
};

export default useProtectedRoute;
