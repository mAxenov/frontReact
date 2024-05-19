import { Route, Routes } from 'react-router-dom';
import protectedRoutes from './protected';
import AuthLayout from './AuthLayout ';

function CustomRoutes() {
  return (
    <Routes>
      <Route path={protectedRoutes.path} element={protectedRoutes.element}>
        {protectedRoutes.children.map((route) => (
          <Route key={route.path} element={<AuthLayout roles={route.roles} />}>
            <Route path={route.path} element={route.element} />
          </Route>
        ))}
      </Route>
    </Routes>
  );
}

export default CustomRoutes;
