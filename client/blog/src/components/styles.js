import styled from 'styled-components';
import { Menu, Button } from 'antd';

export const ActionMenuItem = styled(Menu.Item)`
  :empty {
    display: none;
  }
`;
export const SpinnerWrapper = styled.div`
  // padding-left: 10px;
  padding-right: 20px;
  overflow-x: auto;
`;

export const BackButtonWrapper = styled.div`
  display: flex;
  margin: auto 0;
  cursor: pointer;
`;

export const PageOverlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const FroalaContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: calc(100vh - 150px);
  max-height: calc(100vh - 150px);
  border-radius: 5px;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(80, 80, 80, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  del, span.del {
    background-color: #f8eb9f;
    text-decoration: line-through;
  }
  ins, span.ins {
    background-color: #a0f5ca;
    text-decoration: none;
    display: inline-flex;
  }
  .tooltip {
    position: relative;
  }
  .tooltip:hover:after{
    padding: 3px 6px;
    background: rgba(5, 135, 197, 0.9);
    color:#fff;
    content: attr(data-tooltip);
    position: absolute;
    left: 0px;
    top: -30px;
    z-index: ${({ isAuditMode }) => (isAuditMode ? '10' : '-1')};
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    font-style: normal;
    font-family: arial;
    width: max-content;
    border-radius: 5px;
  }
  .highlight {
    transition: background-color 0.4s ease-in-out;
  }
  .fr-wrapper{
    scroll-behavior: smooth;
  }
`;

export const BackTopButton = styled(Button)`
    display: none;
    position: sticky;
    bottom: 80px;
    float: right;
    color: white;
    padding: 0;
    z-index: 1;
    margin-right: 32px;
    i {
      margin: auto;
      svg {
        font-size: 30px;
      }
    }
`;
