import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

const UserRoleContext = createContext();

export const UserRoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(() => {
    // Initialize userRole from localStorage or default to "all" roles
    const storedToken = localStorage.getItem("Authorization");
    const storedUserRole = jwt_decode(storedToken).role;
    return storedUserRole || "all";
  });

  useEffect(() => {
    // Check if there is a token in localStorage
    const storedToken = localStorage.getItem("Authorization");
    if (storedToken) {
      // If a token is present, decode it and set the user's role
      const decodedToken = jwt_decode(storedToken);
      const decodedUserRole = decodedToken.role;
      setUserRole(decodedUserRole);

      // Store the user role in localStorage
      localStorage.setItem("userRole", decodedUserRole);
    }
  }, []); // Only run this effect once during component initialization

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

UserRoleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCentralState = () => {
  const context = useContext(UserRoleContext);
  if (!context) {
    throw new Error("useCentralState must be used within a UserRoleProvider");
  }
  return context;
};