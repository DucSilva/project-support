import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get'
import { Link, Redirect } from 'react-router-dom';
import {
    Menu, Dropdown, Col,
} from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import {
    RowContainer, ImageContainer, InfoWrapper, ProfileContainer, ActionMenuItem,
    SettingTabContainer,
} from './styles';
import Avatar from '../Avatar/Avatar';
import LogoSvg from '../../common/images/m10.jpg';

const pageIndexMapping = {
    '/': 1,
    '/admin': 2,
};

const Header = (props) => {
    const { user, location } = props;
    const username = _get(user, 'username', '');
    const role = _get('user.role', '')
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

    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('existingUser');
        return <Redirect to='/login' />
    }

    const renderSettingTab = () => (
        <SettingTabContainer>
            <Menu>
                <ActionMenuItem>
                    <a onClick={onToggleModal}>View Profile</a>
                </ActionMenuItem>
                <ActionMenuItem>
                </ActionMenuItem>
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
                    <Link to="/">MeCode</Link>
                </ImageContainer>
            </Col>
            <Col className="gutter-row" span={19}>
                <InfoWrapper>
                    <Avatar src={LogoSvg} color="red" />
                    <ProfileContainer>
                        <p>{`${username || "Duc"}`}</p>
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