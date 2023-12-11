import { useLocation, Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = () => {
  const { auth } = useAuth();
  const isAdmin = auth.isAdmin;
  const location = useLocation();
  // console.log(auth);
  return (
    isAdmin
      ?
      <Outlet/>
      : <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};


export default RequireAuth;
