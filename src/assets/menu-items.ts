import { admin, manager, noRole } from 'src/assets/roles';

const menuItems = {
  id: 'menu-item',
  title: 'Навигация',
  type: 'group',
  children: [
    {
      id: 'allHotel',
      title: '> Все гостиницы',
      url: 'hotels/all',
      allowedRoles: admin,
    },
    {
      id: 'searchRoom',
      title: '> Поиск номера',
      url: '/',
      allowedRoles: noRole,
    },
    {
      id: 'createHotel',
      title: '> Добавить гостиницу',
      url: 'hotels/create',
      allowedRoles: admin,
    },
    {
      id: 'users',
      title: '> Пользователи',
      url: '/users',
      allowedRoles: manager,
    },
  ],
};

export default menuItems;
