import { admin } from 'src/assets/roles';

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
      id: 'createHotel',
      title: '> Добавить гостиницу',
      url: 'hotels/create',
      allowedRoles: admin,
    },
  ],
};

export default menuItems;
