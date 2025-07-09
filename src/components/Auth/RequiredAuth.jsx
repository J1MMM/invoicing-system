import React from "react";
import { isAuthenticated } from "../../utils/storage";
import { Navigate, Outlet } from "react-router-dom";

function RequiredAuth() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
}

export default RequiredAuth;
