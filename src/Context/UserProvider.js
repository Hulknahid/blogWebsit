import React, { useState } from "react";
import { useEffect } from "react";
import { getCurrentUserDetails, isLogged } from "../auth";
import userContext from "./UserContext";
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ data: {}, login: false });
  useEffect(() => {
    setUser({
      data: getCurrentUserDetails(),
      login: isLogged(),
    });
  }, []);
  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        {children}
      </userContext.Provider>
    </div>
  );
};

export default UserProvider;
