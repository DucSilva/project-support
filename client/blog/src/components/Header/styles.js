import styled from 'styled-components';
import { Row, Menu } from 'antd';


export const ActionMenuItem = styled(Menu.Item)`
  :empty {
    display: none;
  }
`;

export const RowContainer = styled(Row)`
  height: 100px;
  padding: 0 5px;
  background-color: #e6f7ff;
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  text-align: center;
  cursor: pointer;
  img{
    max-height: 100px;
    width: auto;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  padding-left: 10px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  color: #212121;
  max-width: 67%;
  @media (max-width: 1024px) {
      ${''}
  }
  p {
    height: 1.1em;
    font-size: 14px;
    margin-bottom: 4px;
    line-height: 1.1em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  span {
    height: 1.1em;
    font-size: 10px;
    line-height: 1em;
    text-transform: uppercase;
  }
`;

export const SettingTabContainer = styled.div`
  a {
    color: rgba(0, 0, 0, 0.65);
  }
`;