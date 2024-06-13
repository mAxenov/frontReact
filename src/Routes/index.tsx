import { Route, Routes } from 'react-router-dom';
import routes from './protected';
import AuthLayout from './AuthLayout ';

function CustomRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path}>
          {route.children.map((route) => (
            <Route
              key={route.path}
              element={<AuthLayout roles={route.roles} />}
            >
              <Route path={route.path} element={route.element} />
            </Route>
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default CustomRoutes;
