import React, { useState } from "react";
import userContext from "./UserContext";
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ data: {}, login: false });
  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        {children}
      </userContext.Provider>
    </div>
  );
};

export default UserProvider;
