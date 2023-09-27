import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const UserRoleContext = createContext();

export const UserRoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("all"); // Initial user role

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

UserRoleProvider.propTypes = {
  children: PropTypes.node.isRequired, // Use PropTypes.node to validate that 'children' is a valid React node
};


export const useCentralState = () => {
  const context = useContext(UserRoleContext);
  if (!context) {
    throw new Error("useCentralState must be used within a UserRoleProvider");
  }
  return context;
};