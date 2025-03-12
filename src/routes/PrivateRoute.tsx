import { useAuthContext } from '@/context/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
  const { user, loading } = useAuthContext();
  const location = useLocation();


  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  if (!user && !loading) {
    console.warn("🔒 Acesso negado. Redirecionando para /auth/login desde:", location.pathname);
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }
  

  return <Outlet />;
};

export default PrivateRoute;