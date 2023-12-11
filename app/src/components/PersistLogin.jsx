import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';

const PersistLogin = () => {
  // States
  const [isLoading, setIsloading] = useState(true);

  // Hooks
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  const accessToken = !auth?.accessToken;

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    };
    accessToken ? verifyRefreshToken() : setIsloading(false);
  }, [accessToken, refresh]);

  // Component
  return (
    <>
      {isLoading
        ?
        <div>
          <p>Cargando</p>
        </div>
        : <Outlet />
      }
    </>
  );
};

export default PersistLogin;