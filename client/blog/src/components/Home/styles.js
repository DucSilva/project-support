import styled from 'styled-components';

export const TopNavContainer = styled.div`
  height: ${({ isFullscreen }) => (isFullscreen ? '0' : '60px')};
  opacity: ${({ isFullscreen }) => (isFullscreen ? '0' : '1')};
  background: #ffffff;
  display: flex;
  transition: height 0.2s ease-in-out;
  > div {
    display: ${({ isFullscreen }) => (isFullscreen ? 'none' : 'flex')};
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  flex: 0 0 20%;
  display: flex;
  padding: 12px 18px 10px 24px;
  @media (max-width: 1024px) {
    flex: 0 0 23%;
  }
  @media (max-width: 768px) {
    flex: 0 0 30%;
  }
  img {
    height: 42px;
  }
  a {
    margin: auto;
  }
`;

export const LogoFontContainer = styled.div`
  font-size: 1.6em;
  font-weight: bold;
  padding: 4px 15px;
  letter-spacing: 0.5px;
  @media (max-width: 1200px) {
    font-size: 1.2em;
    padding: 10px 9px;
  }
  @media (max-width: 1024px) {
    font-size: 1em;
    padding: 10px 9px;
  }

  span {
    font-family: 'Proxima Nova Bold';
    :first-of-type {
      color: #2e3192;
    }

    color: #008ccf;
  }
`;
export const SearchBarContainer = styled.div`
  display: flex;
  padding: 12px 0;
  flex: 0 0 60%;
  @media (max-width: 1024px) {
    flex: 0 0 59%;
  }
  @media (max-width: 768px) {
    flex: 0 0 50%;
  }
  input {
    background: #f1f3f5;
    color: #a8aaab;
    border: none;
    font-style: italic;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex: 0 0 19%;
  width: 19%;
  align-items: center;
  height: 60px;
  justify-content: flex-end;

  .avatar {
    flex: 0 0 15%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 1024px) {
      flex: 0 0 100%;
      ${''}
    }
    > div {
      height: 40px;
      min-width: 40px;
      max-width: 40px;
    }
  }

  .notification {
    margin-right: 15px;
  }

  @media (max-width: 1024px) {
    flex: 0 0 10%;
  }

  i {
    @media (max-width: 1024px) {
      font-size: 1em;
      margin-right: 1em;
    }
    font-size: 1.6em;
    color: #adbac6;
    :hover {
      cursor: pointer;
      color: unset;
    }
  }
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

export const AvatarContainer = styled.div``;

export const SettingTabContainer = styled.div`
  a {
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const NavLinkWrapper = styled.div`
  text-transform: uppercase;
  padding: 7px 30px;
  width: 300%;
  a {
    margin-right: 24px;
    font-weight: bold;
    color: #212121;
    :nth-child(${(props) => props.currentIndex}) {
      color: #008ccf;
    }
  }
`;
