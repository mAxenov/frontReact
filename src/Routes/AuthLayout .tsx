import { Navigate, Outlet } from 'react-router-dom';
import useIsRole from 'src/utils/hooks/useIsRole';

const AuthLayout = ({ roles }: { roles: string[] }) => {
  const isAuth = useIsRole(roles);
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AuthLayout;
