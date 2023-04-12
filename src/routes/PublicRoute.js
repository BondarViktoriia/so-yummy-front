
// import { selectToken } from '../redux/auth/authSelectors';
import { selectToken } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
  component,

  redirectTo = '/main',
}) => {
  const token = useSelector(selectToken);
  return token ? <Navigate to={redirectTo} /> : component;
};