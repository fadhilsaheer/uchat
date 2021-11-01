import jwtDecode from 'jwt-decode';
import cookie from 'js-cookie';

export const setToken = (token: string) => {
  cookie.set('token', token);
};

export const getUserFromToken = (token: string): Boolean | any => {
  const decodedData: any = jwtDecode(token);

  if (decodedData?.exp * 1000 < Date.now()) {
    return false;
  }

  return decodedData;
};

export const getUserFromCookie = () => {
  const token = cookie.get('token');

  if (!token) return false;

  return getUserFromToken(token);
};
