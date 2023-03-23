import { Navigate } from "react-router-dom";
import { getStorageUser } from "../auth/storage";

type RequireAuthProps = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const user = getStorageUser();

  if (!user) return <Navigate to="/" replace />;

  return children;
};

export default RequireAuth;
