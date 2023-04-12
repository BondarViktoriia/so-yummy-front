// import { selectToken } from '../redux/auth/authSelectors';
import {selectIsLoggedIn} from '../redux/auth/authSelectors'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
  component: Component,

  redirectTo = '/main',
}) => {
  const token = useSelector(selectIsLoggedIn);
  return token ? <Navigate to={redirectTo} /> : Component;
};
