import { Navigate } from "react-router-dom";
import { getUser } from "../auth/storage";

type RequireAuthProps = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const user = getUser();

  if (!user) return <Navigate to="/login-code" replace />;

  return children;
};

export default RequireAuth;
