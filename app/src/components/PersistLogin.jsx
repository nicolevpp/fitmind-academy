import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';


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
          <CircularProgress color="secondary" sx={{ position: 'absolute', top: '50%', left: '50%' }} />
        </div>
        : <Outlet/>
      }
    </>
  );
};

export default PersistLogin;