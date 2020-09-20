/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { LayoutContainer } from './styles';
import Avatar from '../Avatar/Avatar';
import LogoSvg from '../../common/images/duc.png';
const { Header, Sider, Content } = Layout;

const Home = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(prevCollapsed => !prevCollapsed)
  }
  return (
    <LayoutContainer>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <Avatar src={LogoSvg} color="red" />
        </div>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
            </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
            </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
            </Menu.Item>
        </Menu>
      </Sider>
      <LayoutContainer className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
          </Content>
      </LayoutContainer>
    </LayoutContainer>
  )
};

Home.defaultProps = {

};

Home.propTypes = {

};

export default Home;
