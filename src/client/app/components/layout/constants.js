import {
  BarsOutlined,
  LaptopOutlined,
  LoginOutlined,
  MessageOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const HEADER_OPTIONS = ['Home', 'Logout'];

export const MENU_OPTIONS = {
  courses: {
    label: 'Courses',
    icon: LaptopOutlined,
    path: '/courses',
    permissions: ['admin', 'instructor'],
  },
  topics: {
    label: 'Discussions',
    icon: MessageOutlined,
    permissions: ['admin', 'instructor'],
    subOptions: [
      {
        label: 'Topics',
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
    icon: BarsOutlined,
    path: '/enrollments',
    permissions: ['admin'],
  },
  login: {
    label: 'Login Data',
    icon: LoginOutlined,
    path: '/logins',
    permissions: ['admin'],
  },
};
