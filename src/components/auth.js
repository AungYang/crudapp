import { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; //imported from firebase.js
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from '../firebase';

// import for redux stuff
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../redux/slices/userSlice';
// import { signin, signout } from '../redux/reducers/authReducer';

const Auth = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // useSelector accesses the store's state
  const { user } = useSelector((state) => {
    console.log('printing from state', state);
    return state.user;
  });
  //useDispatch allows you to call actions
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log('onAuthStateChanged', auth, 'authUser:', authUser);
      if (authUser) {
        console.log('authUser: ', authUser);
        // dispatch(
        //   signin({
        //     user: authUser.uid,
        //   })
        // );
      } else {
        // dispatch(signout());
      }
    });
  });

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      // dispatch(signin({
      //   user: AuthUser.uid,
      // }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = () => {
    console.log('auth.js signin');
    dispatch(signin({ loginEmail, loginPassword }));
    console.log('auth.js signin done');
  };

  // const login = async () => {
  //   try {
  //     await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

  //     // dispatch(signin({
  //     //   user: AuthUser.uid,
  //     // }));

  //     console.log('SIGN IN IS SUCCESSFUL!!!!');
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const logout = () => {
    // await signOut(auth);
    console.log('clicking logout');
    signOut(auth);
    console.log('signed out!');
    // dispatch to store with logout action
    // dispatch(signout());
  };

  return (
    <div>
      USER: {user && `email: ${user.email} uid:${user.uid}`}
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={register}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            REGISTER
          </Button>
        </Form.Item>

        {/* end of register form */}
      </Form>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onFinish={login}
      >
        <Form.Item
          label="Username"
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
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
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
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </Form.Item>

        {/* end of login form */}
      </Form>
      <Button type="primary" htmlType="submit" onClick={logout}>
        LOGOUT
      </Button>
    </div>
  );
};

export default Auth;
