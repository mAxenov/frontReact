import styles from './userProfile.module.css'; // Импортируем файл стилей для UserProfile
import Login from './login/Login';
import useAuth from 'src/utils/hooks/useAuth';
import Profile from './profile/Profile';

const UserProfile = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.userProfile}>
      {isAuthenticated ? <Profile /> : <Login />}
    </div>
  );
};

export default UserProfile;
