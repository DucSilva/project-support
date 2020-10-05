import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const MenuItem = Menu.Item;

export const AdminContainer = styled(Layout)`
  width: 100%;
  display: flex;
  height: 100%;
  .ant-layout-sider {
    background: #f0f2f5;
    border-right: 1px solid #e8e8e8;
  }
  .ExpandedItems{
    background: #f0f2f5;
    border-right: unset;
  }
  .CollapsedItems{
    background: #f0f2f5;
    border-right: 1px solid #e8e8e8;
  }
`;

export const CollapseMenuWrapper = styled(Sider)`
`;

export const CollapseButton = styled.button`
  background-color: white;
  border: none;
  i{
    margin-right: 0;
  }
`;

export const TableWrapper = styled.div`
  padding: 20px;
`;

export const HeaderWrapper = styled.div`
  background-color: #f2f3f5;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  padding: 5px 15px;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  font-size: 20px;
  margin-right: 0.5em;
`;

export const SearchWrapper = styled.div`
  margin-left: 0.5em;
  min-width: 250px;
  input {
    border-radius: 30px;
  }
  .ant-input:placeholder-shown {
    font-style: italic;
  }
`;

export const IconActionWrapper = styled.div`
  width: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  i {
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
  }
  .anticon-printer {
    color: #008ccf;
  }
  .anticon-ellipsis {
    color: #adbac6;
  }
`;

export const CustomMenu = styled(Menu)`
  .custom-menu-track.ant-menu-item.ant-menu-item-selected {
    background-color: #018ccf;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 80%;
    margin: 0 auto;
  }

  .custom-menu-track.ant-menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CustomMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomMenuIcon = styled.i`
  margin-right: 5px;
`;
