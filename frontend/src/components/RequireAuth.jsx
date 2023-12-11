import { useLocation, Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  // console.log(auth);
  return (
    auth?.accessToken
      ?
      <Outlet/>
      : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;



// return (
//   <>
//     {
//       home
//         ? auth?.userId
//           ? <Navigate to="/private" state={{ from: location }} replace />
//           : <Outlet />
//         : auth?.userId
//           ? <Outlet />
//           : <Navigate to="/login" state={{ from: location }} replace />
//     }
//   </>
// );

// version tutorial
// return (
//   auth?.email
//     ? <Outlet/>
//     : <Navigate to="/login" state={{ from: location }} replace />
// );