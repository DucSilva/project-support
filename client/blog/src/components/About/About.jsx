/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Menu, Dropdown,
} from 'antd';
import Icon from '@ant-design/icons';

import {
  TopNavContainer,
  LogoContainer,
  SearchBarContainer,
  MenuContainer,
  ProfileContainer,
  SettingTabContainer,
} from './styles';
import Avatar from '../Avatar/Avatar';
// import { ROLE_VALUE } from '../../utils/constants';
// import ChangePassword from '../../containers/ModelForm/ChangePassword';
import { ActionMenuItem } from '../styles';
import LogoSvg from '../../common/images/logo.png';
// import UserDetail from '../../containers/UserDetail';
// import Notifications from '../../containers/Notification';
// import { getBrowser } from '../../utils/funcUtils';
// import { firebaseMessaging } from '../../utils/myFirebase';
// import SearchBar from '../../containers/Search';

// Get browser detail
// const { fingerprint } = getBrowser();

const pageIndexMapping = {
  '/': 1,
  '/admin': 2,
};

const About = (props) => {
  const {
    location, logout, firstName, lastName, role, color, userId, avatar, isFullscreen,
    selectResource, unsubscribeDevice, isPageLoading,
  } = props;

  const [toggleModal, setToggleModal] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const { pathname } = location;

  useEffect(() => {
    setPageIndex(pageIndexMapping[pathname]);
  }, [pathname]);

  const changePageIndex = (index) => {
    setPageIndex(index);
  };

  const onToggleModal = () => {
    setToggleModal((prevToggleModal) => !prevToggleModal);
  };

  const handleLogOut = (async () => {
    // if (firebaseMessaging !== null && firebaseMessaging.permission === 'granted') {
    //   const token = await firebaseMessaging.getToken();
    //   unsubscribeDevice(token, fingerprint);
    //   logout();
    // } else {
    //   logout();
    // }
  });

  const renderSettingTab = () => (
    <SettingTabContainer>
      <Menu>
        <ActionMenuItem>
          <a onClick={onToggleModal}>View Profile</a>
        </ActionMenuItem>
        <ActionMenuItem>
          {/* <ChangePassword toggleComponent={<a>Change Password</a>} /> */}
        </ActionMenuItem>
        {/* {(role === ROLE_VALUE.SUPER_ADMIN || role === ROLE_VALUE.ADMIN) && ( */}
        <ActionMenuItem>
          <Link to="/admin" onClick={() => changePageIndex(pageIndexMapping['/admin'])}>
            Admin
            </Link>
        </ActionMenuItem>
        {/* )} */}
        <ActionMenuItem>
          <a onClick={() => handleLogOut()}>Logout</a>
        </ActionMenuItem>
      </Menu>
    </SettingTabContainer>
  );

  return (
    <TopNavContainer isFullscreen={isFullscreen}>
      <LogoContainer onClick={() => selectResource({ _id: '', type: '' })}>
        <Link to="/">
          <img src={LogoSvg} alt="logo" />
        </Link>
      </LogoContainer>
      <SearchBarContainer>
        {/* <SearchBar /> */}
      </SearchBarContainer>
      <MenuContainer>
        {!isPageLoading && (
          <div className="notification">
            {/* <Notifications /> */}
          </div>
        )}
        <div className="avatar">
          <Avatar color={color} src={avatar || ''} />
        </div>
        <ProfileContainer>
          <p>{`${firstName} ${lastName}`}</p>
          <span>{role}</span>
        </ProfileContainer>
        <Dropdown overlay={renderSettingTab()} placement="topRight" trigger={['click']}>
          <Icon type="setting" />
        </Dropdown>
      </MenuContainer>
      {/* {toggleModal && (
        // <UserDetail userDetail={{ ...props, _id: userId }} toggleModal={onToggleModal} />
      )} */}
    </TopNavContainer>
  );
};

About.defaultProps = {
  location: {},
  logout: null,
  firstName: null,
  lastName: null,
  role: null,
  color: null,
  userId: null,
  avatar: null,
  isFullscreen: false,
  isPageLoading: false,
};

About.propTypes = {
  location: PropTypes.object,
  logout: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string,
  color: PropTypes.string,
  userId: PropTypes.string,
  avatar: PropTypes.string,
  isFullscreen: PropTypes.bool,
  selectResource: PropTypes.func.isRequired,
  unsubscribeDevice: PropTypes.func.isRequired,
  isPageLoading: PropTypes.bool,
};

export default About;
