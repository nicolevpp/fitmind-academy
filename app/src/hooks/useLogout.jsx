import  axios  from 'axios';
import useAuth from './useAuth';

export default function useLogout () {
  const { setAuth } = useAuth();

  const logout = async () => {
    console.log('cerrando sesion');
    setAuth({});
    try {
      const response = await axios.get('/api/logout', {
        withCredentials: true
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return logout;
}