import './App.css';
import React from 'react';
import Note from './components/Note';
// import Home from './pages/home';
import Auth from './components/auth';
import { Breadcrumb, Layout, Menu, Button } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

// TODO: DELETE THIS
// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
// TODO: DELETE THIS
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });

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
