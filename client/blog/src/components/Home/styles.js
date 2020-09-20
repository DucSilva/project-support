import styled from 'styled-components';
import { Layout } from 'antd';

export const LayoutContainer = styled(Layout)`
  display: flex;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .logo {
    background: rgba(255, 255, 255, 0.2);
    margin: 20px;
    justify-contain: center;
    height: 42px;
    width: 42px;
    border-radius: 50%;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
  min-height: 100vh;
`;
