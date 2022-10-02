import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLogged } from "../auth";

const Privateroute = () => {
  if (isLogged()) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }

  // return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default Privateroute;
