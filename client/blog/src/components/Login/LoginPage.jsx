import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Button, Form, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import authenticationActions from '../../actions/authenticationActions';
import { setCookie } from '../../utils/cookies';
import { LoginWrapper, LoginForm } from './styles';
import authSelector from '../../selector/authSelector';


const LoginPage = (props) => {
  const { login, message, isLogin, isLoggedIn, history, token } = props;

  if (token) {
    return <Redirect to='/' />
  }
  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    login(values);
  };

  return (
    <>
      <LoginWrapper>
        <h3> Login Page </h3>
        <LoginForm>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Spin spinning={isLogin}>

              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
              </Button>
              Or <Link to="/register">register now!</Link>
              </Form.Item>
            </Spin>
          </Form>
        </LoginForm>
      </LoginWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  const isLogin = authSelector.getIsLogin(state);
  const isLoggedIn = authSelector.checkAuthenticatedStatus(state);
  const token = authSelector.getToken(state);
  return {
    isLogin,
    isLoggedIn,
    token,
  }
};

const mapDispatchToProps = {
  login: authenticationActions.login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);