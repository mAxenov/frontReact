import './App.css';
import { useCheckAuthQuery } from './API/authApi';
import Loader from './components/UI/Loader/Loader';
import CustomRoutes from './Routes';

function App() {
  const { isLoading } = useCheckAuthQuery({});

  if (isLoading) {
    return <Loader />;
  }

  return <CustomRoutes />;
}

export default App;
