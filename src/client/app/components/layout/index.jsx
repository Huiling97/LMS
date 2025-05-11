import { createElement, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';

import { HEADER_OPTIONS, MENU_OPTIONS } from './constants';
import Breadcrumbs from '../breadcrumb';
import Home from '../../pages/home';
import { AuthContext } from '../../store/auth-context';

const { Header, Content, Sider } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const {
    user: { role = '', username = '' },
    logout,
  } = useContext(AuthContext);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuOptions = Object.values(MENU_OPTIONS)
    .filter(({ permissions }) => permissions.includes(role))
    .map(({ label, icon, path, subOptions }) => ({
      key: path,
      icon: createElement(icon),
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
    <Layout className='layout-container'>
      <Header className='layout-header'>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['Home']}
          items={HEADER_OPTIONS.map((key) => ({
            key,
            label: key,
          }))}
          style={{ flex: 1, minWidth: 0 }}
          onClick={handleHeaderClick}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode='inline'
            defaultSelectedKeys={[`${menuOptions[0].label}`]}
            style={{ height: '100%', borderRight: 0 }}
            items={menuOptions}
            onClick={({ key }) => navigate(key)}
          />
        </Sider>
        <Layout className='layout-inner-wrapper'>
          {location.pathname === '/' ? (
            <div>
              <Home />
            </div>
          ) : (
            <>
              <Breadcrumbs />
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Outlet />{' '}
                {/* This is where the nested routes will be rendered */}
              </Content>
            </>
          )}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
