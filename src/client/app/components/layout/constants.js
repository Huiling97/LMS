import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const HEADER_OPTIONS = ['Home', 'Settings'];

export const MENU_OPTIONS = {
  courses: {
    label: 'Courses',
    icon: LaptopOutlined,
    path: '/courses',
    permissions: ['admin', 'user'],
  },
  topics: {
    label: 'Topics',
    icon: NotificationOutlined,
    path: '/topics',
    permissions: ['admin', 'user'],
    subOptions: [
      {
        label: 'All Topics',
        path: '/topics',
      },
      {
        label: 'Entries',
        path: '/topics/entries',
      },
    ],
  },
  users: {
    label: 'Users',
    icon: UserOutlined,
    path: '/users',
    permissions: ['admin'],
  },
  enrollment: {
    label: 'Enrollments',
    icon: UserOutlined,
    path: '/enrollments',
    permissions: ['admin'],
  },
  login: {
    label: 'Login Data',
    icon: UserOutlined,
    path: '/logins',
    permissions: ['admin'],
  },
};
