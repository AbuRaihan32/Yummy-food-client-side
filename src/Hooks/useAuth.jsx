import { useContext } from "react";
import { AuthContext } from "../Components/Providers/AuthProviders";

const useAuth = () => {
  const authentication = useContext(AuthContext);
  return authentication; 
};

export default useAuth;
