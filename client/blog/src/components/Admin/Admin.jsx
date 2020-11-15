/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Layout } from 'antd';
// import CreateCompany from '../../containers/ModelForm/CreateCompany';
import {
  AdminContainer,
  CollapseMenuWrapper,
  TableWrapper,
  HeaderWrapper,
  HeaderTitle,
  SearchWrapper,
  IconActionWrapper,
  CustomMenu,
  CustomMenuItem,
} from './styles';
// import UserTable from '../../containers/UserTable';
// import { ROLE_VALUE } from '../../utils/constants';
// import UserCreate from '../../containers/UserCreate';
import { PrinterOutlined, PlusCircleFilled, SearchOutlined, EllipsisOutlined, UserOutlined, BankOutlined } from '@ant-design/icons';


const { Content } = Layout;
const customMenuTrack = 'custom-menu-track';

const Admin = (props) => {
  const { user, getAllTree, treeData } = props;
  const [isMenuCollapse, setIsMenuCollapse] = useState(true);
  const [isUserTable, setIsUserTable] = useState(true);
  const [isCompanyTable, setIsCompanyTable] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  // Fetch data one time when visit page
  // useEffect(() => {
  //   if (!treeData) getAllTree();
  // }, []);

  const toggleCollapsed = () => setIsMenuCollapse(!isMenuCollapse);

  const openUserTable = () => {
    setIsUserTable(true);
    setIsCompanyTable(false);
  };

  const openCompanyTable = () => {
    setIsUserTable(false);
    setIsCompanyTable(true);
  };

  const UserHeader = (
    <>
      <Button onClick={() => setToggleModal((prevToggleModal) => !prevToggleModal)}>
        <PlusCircleFilled style={{ fontSize: '12px' }} />
        ADD USER
      </Button>
      {/* {toggleModal
        && <UserCreate toggleModal={() => setToggleModal((prevToggleModal) => !prevToggleModal)} />} */}
    </>
  );

  const renderHeader = (header) => (
    <HeaderWrapper>
      <HeaderTitle>
        {header}
      </HeaderTitle>
      {/* { header === 'Users' ? UserHeader : <CreateCompany />} */}
      <SearchWrapper>
        <Input
          placeholder="Search Users..."
          prefix={<SearchOutlined style={{ fontWeight: 'bold', color: '#a8aaab' }} />}
        />
      </SearchWrapper>
      <IconActionWrapper>
        <PrinterOutlined />
        <EllipsisOutlined />
      </IconActionWrapper>
    </HeaderWrapper>
  );

  return (
    <AdminContainer>
      <CollapseMenuWrapper collapsed={isMenuCollapse} onCollapse={toggleCollapsed}>
        <CustomMenu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          // inlineCollapsed={isMenuCollapse}
          className={isMenuCollapse ? 'CollapsedItems' : 'ExpandedItems'}
        >
          <CustomMenuItem key="1" onClick={openUserTable} className={customMenuTrack} title="User">
            {isMenuCollapse
              ? <UserOutlined />
              : (
                <>
                  <UserOutlined />
                  <span>User</span>
                </>
              )}
          </CustomMenuItem>
          {/* {user.role === ROLE_VALUE.SUPER_ADMIN && (
            <CustomMenuItem key="2" onClick={openCompanyTable} className={customMenuTrack} title="Company">
              { isMenuCollapse
                ? <BankOutlined />
                : (
                  <>
                    <BankOutlined />
                    <span>Company</span>
                  </>
                )}
            </CustomMenuItem>
          )} */}
        </CustomMenu>
      </CollapseMenuWrapper>
      <Layout>
        <Content>
          {isUserTable && (
            <>
              {renderHeader('Users')}
              <TableWrapper>
                {/* <UserTable /> */}
              </TableWrapper>
            </>
          )}
          {/* {isCompanyTable && user.role === ROLE_VALUE.SUPER_ADMIN && ( */}
          <>
            {renderHeader('Company')}
            <TableWrapper>
              {/* <CompanyTable /> */}
            </TableWrapper>
          </>
          {/* )} */}
        </Content>
      </Layout>
    </AdminContainer>
  );
};

Admin.propTypes = {
  getAllTree: PropTypes.func.isRequired,
  treeData: PropTypes.any,
  user: PropTypes.object.isRequired,
};

Admin.defaultProps = {
  treeData: null,
};

export default Admin;
