import { useEffect, useState } from "react";
import { Button, Form, Input } from 'antd';


import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const Auth = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");



  const [user, setUser] = useState({});

  const onAuthStateChanged = () => {
    onAuthStateChanged
    if (user) {
      // User is signed in.
    }
  }; 


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("SIGN IN IS SUCCESSFUL!!!!");
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    console.log("signed out!");
  };

  return (
    <div>
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
        onChange={(event) => {setRegisterEmail(event.target.value)}}
        


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
        onChange={(event) => {setRegisterPassword(event.target.value)}}

      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">REGISTER</Button>
      </Form.Item>
    
    {/* end of form */}
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
        onChange={(event) => {setLoginEmail(event.target.value)}}

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
        onChange={(event) => {setLoginPassword(event.target.value)}}

      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">LOGIN</Button>
      </Form.Item>
    
    {/* end of form */}
    </Form> 

    <Button type="primary" htmlType="submit" onClick={logout}>LOGOUT</Button>



    </div>
  )
  // return (
  //   <div className="App"></div>
  //     {/* <div>
  //       <h3> Register User </h3>
  //       <input
  //         placeholder="Email..."
  //         onChange={(event) => {
  //           setRegisterEmail(event.target.value);
  //         }}
  //       />
  //       <input
  //         placeholder="Password..."
  //         onChange={(event) => {
  //           setRegisterPassword(event.target.value);
  //         }}
  //       />

  //       <button onClick={register}> Create User</button>
  //     </div>

  //     <div>
  //       <h3> Login </h3>
  //       <input
  //         placeholder="Email..."
  //         onChange={(event) => {
  //           setLoginEmail(event.target.value);
  //         }}
  //       />
  //       <input
  //         placeholder="Password..."
  //         onChange={(event) => {
  //           setLoginPassword(event.target.value);
  //         }}
  //       />

  //       <button onClick={login}> Login</button>
  //     </div>

  //     <h4> User Logged In: </h4>
  //     {user?.email}

  //     <button onClick={logout}> Sign Out </button>
  //   </div> */}
  // );
}

export default Auth;