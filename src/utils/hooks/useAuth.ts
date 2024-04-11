import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

function useAuth() {
  const user = useSelector((state: RootState) => state.auth);
  return user;
}

export default useAuth;
