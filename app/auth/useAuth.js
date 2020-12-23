import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logOut };
};
export default useAuth;
