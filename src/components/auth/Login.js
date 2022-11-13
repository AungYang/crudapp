import { Card, Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../redux/slices/userSlice';
import { useState } from 'react';

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const dispatch = useDispatch();

  const login = () => {
    console.log('auth.js signin');
    dispatch(signin({ loginEmail, loginPassword }));
    console.log('auth.js signin done');
  };
  return (
    <Card title="Login" size="large">
      <Form
        autoComplete="off"
        onFinish={login}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        >
          <Input placeholder="Email"/>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          onChange={(event) => {
            console.log('setLoginPassword', event.target.value);
            setLoginPassword(event.target.value);
          }}
        >
          <Input.Password placeholder="Password"/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </Form.Item>
        <Form.Item>
          <a className="mblogin-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
      </Form>
      </Card>
  )
}
