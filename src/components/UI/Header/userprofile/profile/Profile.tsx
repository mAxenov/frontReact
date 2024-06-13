import useDropDown from 'src/utils/hooks/useDropDown';
import styles from './profile.module.css';
import useAuth from 'src/utils/hooks/useAuth';
import ProfileBody from './profileBody/ProfileBody';

function Profile() {
  const [onOpen, ref, isOpen] = useDropDown();
  const { user } = useAuth();
  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.header} onClick={onOpen}>
        <div className={styles.logo}>{user?.name[0].toLocaleUpperCase()}</div>
      </div>

      {isOpen && user && (
        <div className={styles.body}>
          <ProfileBody user={user} />
        </div>
      )}
    </div>
  );
}

export default Profile;
