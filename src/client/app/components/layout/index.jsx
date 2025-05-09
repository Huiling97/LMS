import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import { HEADER_OPTIONS, MENU_OPTIONS } from './constants';

const { Header, Content, Sider } = Layout;

const headerOptions = HEADER_OPTIONS.map((key) => ({
  key,
  label: key,
}));

const menuOptions = Object.values(MENU_OPTIONS).map(
  ({ label, icon, path, subOptions }) => {
    return {
      key: path,
      icon: React.createElement(icon),
      label,
      path,
      children: subOptions?.map(({ label, path }) => {
        return {
          key: path,
          label,
        };
      }),
    };
  }
);

const MainLayout = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
