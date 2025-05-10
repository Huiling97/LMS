import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import { HEADER_OPTIONS, MENU_OPTIONS } from './constants';
import { AuthContext } from '../../store/auth-context';

const { Header, Content, Sider } = Layout;

const headerOptions = HEADER_OPTIONS.map((key) => ({
  key,
  label: key,
}));

const MainLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuOptions = Object.values(MENU_OPTIONS)
    .filter(({ permissions }) => permissions.includes(user?.role))
    .map(({ label, icon, path, subOptions }) => ({
      key: path,
      icon: React.createElement(icon),
      label,
      path,
      children: subOptions?.map(({ label, path }) => ({
        key: path,
        label,
      })),
    }));

  const handleHeaderClick = ({ key }) => {
    if (key === 'Logout') {
      logout();
    } else if (key === 'Home') {
      navigate('/');
    }
  };

  return (
    <Layout className='full-height-layout'>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className='demo-logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['Home']}
          items={headerOptions}
          style={{ flex: 1, minWidth: 0 }}
          onClick={handleHeaderClick}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['Courses']}
            style={{ height: '100%', borderRight: 0 }}
            items={menuOptions}
            onClick={({ key }) => navigate(key)}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
            style={{ margin: '16px 0' }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
