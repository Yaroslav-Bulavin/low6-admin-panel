import { Navigate, Outlet } from 'react-router-dom';

import { RoutesEnum } from '@/enums/routes.enum';

import { useJWT } from '@/hooks/useJWT.hook';

const PrivateRoute = () => {
  const { jwt } = useJWT();
  return jwt ? <Outlet /> : <Navigate to={RoutesEnum.login} />;
};

export default PrivateRoute;
