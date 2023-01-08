import React from "react";
import Note from "./components/Note";
import Home from "./components/home";

import Auth from "./components/auth";
import { Breadcrumb, Layout, Menu, Button } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged, auth } from "./firebase";
import { setSignedIn, signout } from "./redux/slices/userSlice";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

import NavBar from "./components/NavBar";

const { Header, Content, Footer, Sider } = Layout;

/**
 * TODO:
 * 0. if the user profile is present, render the login, signup differently
 * 1. figure out different routings
 * - when the user lands, what route does it land on?
 * - which routes should be publicaly available and which ones should be private
 * ---- look into authenticated routes (made up term, search on your own)
 */

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { email, uid } = authUser;
        dispatch(setSignedIn({ email, uid }));
      } else {
        dispatch(signout());
      }
    });
    return unsubscribe; // for when react component dismounts, "clean up"
  }, []);

  return (
    <div>
      <Layout>
        <Header className="pi-heaedr">
          <span className="h1">Postit</span>
          <div className="float-end">
            <Button type="secondary">Logout</Button>
            <Button type="secondary">Register</Button>
            <Button type="secondary">Sign In</Button>
          </div>
        </Header>
        <Auth />
        <Home />
      </Layout>
      <NavBar />
    </div>
  );
};

export default App;

//  <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
// </BrowserRouter>
