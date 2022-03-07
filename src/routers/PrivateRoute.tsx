import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export const PrivateRoute = ({ children }:any) => {
  const { pathname, search } = useLocation();


  localStorage.setItem("lastPath", pathname + search);

  const {AuthState} = useContext(AuthContext);

  return AuthState.uid ? { ...children } : <Navigate to={"/login"} />;
};
