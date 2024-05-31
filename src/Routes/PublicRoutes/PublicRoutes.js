import { Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "../UseAuth/UseAuth";

const PublicRoutes = () => {
  const token = UseAuth();
  return token ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoutes;
