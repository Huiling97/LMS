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
    path: '/entries',
    permissions: ['admin', 'user'],
    subOptions: ['Entries'],
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
