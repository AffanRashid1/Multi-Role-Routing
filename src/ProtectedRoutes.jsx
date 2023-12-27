import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, isProtected, allowedRoles }) => {
  const { isLogged, userRole } = useSelector((state) => state.appReducer);

  if (isProtected && !isLogged) {
    return <Navigate to="/login" />;
  } else if (isProtected && allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  } else if (!isProtected && isLogged) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoutes;
