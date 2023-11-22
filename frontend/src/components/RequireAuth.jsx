import { useLocation, Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ home }) => {
  const { auth } = useAuth();
  console.log('asfknaskfas');
  const location = useLocation();
  console.log(auth?.userId);

  return (
    <>
      {
      home
      ? auth?.userId
        ? <Navigate to='/private' state={{ from: location }} replace />
        : <Outlet />
      : auth?.userId
          ? <Outlet />
          : <Navigate to='/' state={{ from: location }} replace />
      }
    </>
  );
};

export default RequireAuth;