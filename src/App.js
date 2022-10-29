import React, { useEffect } from "react";
import About from "./Component/pages/About";
import Home from "./Component/pages/Home";
import Login from "./Component/pages/Login";
import Signup from "./Component/pages/Signup";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Privateroute from "./Component/Privateroute";
import UserDashboard from "./Component/pages/UserRoute/UserDashboard";
import ProfileInfo from "./Component/pages/UserRoute/ProfileInfo";
import { isLogged } from "./auth";
import PostPage from "./Component/pages/PostPage/PostPage";
const App = () => {
  useEffect(() => {
    isLogged();
  }, []);
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="/user" element={<Privateroute />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="profileInfo" element={<ProfileInfo />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
