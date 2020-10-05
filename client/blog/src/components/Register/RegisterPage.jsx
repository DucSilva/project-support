import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import authenticationActions from '../../actions/authenticationActions';
import { RegisterWrapper, FormRegister } from './styles';
import { Input, Button, Form, Spin, Row } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons';
import authSelector from '../../selector/authSelector';


const RegisterPage = (props) => {
  const { isRegister, register } = props;
  const onHandleRegistration = (values) => {
    console.log(values);
    register(values)
  }


  return (
    <RegisterWrapper>
      <h3> Register Page </h3>
      <FormRegister>
        <Form
          name="register"
          className="register-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onHandleRegistration}
        >
          <Spin spinning={isRegister}>
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

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input
                prefix={<GoogleOutlined />}
                type="email"
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="register-form-button">
                Log in
              </Button>
            Already have account? <Link to='login'>Login here</Link>
            </Form.Item>
          </Spin>
        </Form>
      </FormRegister>
    </RegisterWrapper>
  )

}

const mapStateToProps = (state) => {
  const isRegister = authSelector.getIsRegister(state);

  return {
    isRegister
  };
};

const mapDispatchToProps = {
  register: authenticationActions.register,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
