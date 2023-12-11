import useAuth from '../hooks/useAuth';
import axios from 'axios';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const { data } = await axios.get('/api/refresh', {
      withCredentials: true
    });
    setAuth(prev => {
      // console.log(JSON.stringify(prev));
      // console.log(data.accessToken);
      return { ...prev,
        isAdmin: data.isAdmin,
        accessToken: data.accessToken, userId: data.userId };
    });
    return data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;