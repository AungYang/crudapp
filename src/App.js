import './App.css';
import React from 'react';
import Note from './components/Note';
// import Home from './pages/home';



import Auth from './components/auth';
import { Breadcrumb, Layout, Menu, Button } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;


const App = () => {
  return (
    <div>
    <Layout>
      <Header className="pi-header" >
          <span className="h1">Postit</span>
          <div className="float-end">
              <Button type="secondary">Logout</Button>
              <Button type="secondary">Register</Button>
              <Button type="secondary">SignIn</Button>
          </div>
          
      </Header>
      <Auth />
    </Layout>


    </div>
  )
}

export default App;
