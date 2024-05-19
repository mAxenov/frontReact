import { NavLink } from 'react-router-dom';
import styles from './menu.module.css';
import menuItems from 'src/assets/menu-items';
import useAuth from 'src/utils/hooks/useAuth';

function Menu() {
  const { user } = useAuth();
  return (
    <nav className={styles.menuItem}>
      {menuItems.children.map((item) => {
        if (
          (user &&
            item.allowedRoles.length > 0 &&
            item.allowedRoles.includes(user?.role)) ||
          item.allowedRoles.includes('noRole')
        ) {
          return (
            <NavLink
              to={item.url}
              // style={({ isActive }) => ({ color: isActive ? '#079AA2' : 'inherit' })}
              className={styles.menuLink}
              key={item.id}
            >
              {item.title}
            </NavLink>
          );
        }
      })}
    </nav>
  );
}

export default Menu;
