import { createElement, useContext } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';

import { HEADER_OPTIONS, MENU_OPTIONS } from './constants';
import Breadcrumbs from '../breadcrumb';
import AlertContent from '../../components/alert/index';
import Home from '../../pages/home';
import { AuthContext } from '../../store/auth-context';
import { useError } from '../../store/error-context';

const { Header, Content, Sider } = Layout;

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    user: { role = '' },
    logout,
  } = useContext(AuthContext);
  const { error, clearError } = useError();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const currentPath = location.pathname;

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
      {error && (
        <AlertContent
          message={error}
          type='error'
          closable
          onClose={clearError}
        />
      )}
      <Header className='layout-header'>
        <Menu
          theme='dark'
          mode='horizontal'
          selectedKeys={[currentPath === '/' ? 'Home' : '']}
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
            selectedKeys={[currentPath]}
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
                <Outlet />
              </Content>
            </>
          )}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
