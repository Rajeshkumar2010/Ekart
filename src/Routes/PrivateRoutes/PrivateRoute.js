import { Outlet } from "react-dom";
import { UseAuth } from "../UseAuth/UseAuth.js";
import { Navigate } from "reat-router-dom";

const PrivateRoute = () => {
  const token = UseAuth();
  return token ? <Outlet /> : <Navigate to="/logoin" />;
};

export default PrivateRoute;
