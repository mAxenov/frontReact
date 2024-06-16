import './App.css';
import { useCheckAuthQuery } from './API/authApi';
import Loader from './components/UI/Loader/Loader';
import CustomRoutes from './Routes';
// import useIsRole from './utils/hooks/useIsRole';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

function App() {
  const { isLoading } = useCheckAuthQuery({});
  // const isAuth = useIsRole(['admin']);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (isAuth) {
  //     navigate('/admin/hotels/all');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuth]);

  if (isLoading) {
    return <Loader />;
  }

  return <CustomRoutes />;
}

export default App;
