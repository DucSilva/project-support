/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Menu, Dropdown, Col,
} from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import {
  RowContainer, ImageContainer, InfoWrapper, ProfileContainer,
  SettingTabContainer,
} from './styles';
import { ActionMenuItem } from '../styles'
import Avatar from '../Avatar/Avatar';
import LogoSvg from '../../common/images/duc.png';

const pageIndexMapping = {
  '/': 1,
  '/admin': 2,
};

const Header = (props) => {
  const { firstName, lastName, role, location } = props;
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
    console.log('clicked')
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
    <RowContainer>
      <Col className="gutter-row" span={5}>
        <ImageContainer>
          <Link to="/">
            <img src={LogoSvg} alt="" /></Link>
        </ImageContainer>
      </Col>
      <Col className="gutter-row" span={19}>
        <InfoWrapper>
          <Avatar src={LogoSvg} color="red" />
          <ProfileContainer>
            <p>{`${firstName || "Duc"} ${lastName || "Dev"}`}</p>
            <span>{role || " Super Admin"}</span>
          </ProfileContainer>
          <Dropdown overlay={renderSettingTab()} placement="topRight" trigger={['click']}>
            <SettingOutlined />
          </Dropdown>
        </InfoWrapper>
      </Col>
    </RowContainer>
  );
};

Header.defaultProps = {
  firstName: '',
  lastName: '',
  role: '',
  location: '',
};

Header.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string,
  location: PropTypes.string,
};

export default Header;
