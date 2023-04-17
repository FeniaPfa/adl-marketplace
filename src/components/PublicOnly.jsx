import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

export const PublicOnly = ({children}) => {
  const { user } = useUserContext();

  if (user) {
      return <Navigate to="/dashboard" />;
  }
  return children;
}