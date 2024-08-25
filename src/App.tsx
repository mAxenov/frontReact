import './App.css';
import { useCheckAuthQuery } from './API/authApi';
import Loader from './components/UI/Loader/Loader';
import CustomRoutes from './Routes';
import SupportRequest from './pages/Support';
// import useIsRole from './utils/hooks/useIsRole';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

function App() {
  const { isLoading } = useCheckAuthQuery({});

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <CustomRoutes />
      <SupportRequest />
    </>
  );
}

export default App;
