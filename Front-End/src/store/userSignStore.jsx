import { createContext, useContext, useEffect, useState } from "react";
import SignIn from "../utils/signInRequester";
import LogIn from "../utils/logInRequester";
import CheckUserAuth from "../utils/checkUserAuth";
import LogOut from "../utils/logOutRequester";
import { NavigateContext } from "./NavigationStore";

export const UserSigned = createContext();

function UserSignedProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const navigate = useContext(NavigateContext);

  const checkAuth = async () => {
    try {
      const userStatus = await CheckUserAuth();

      if (userStatus.isAuthenticated) {
        setIsAuthenticated(userStatus.user.username);
      } else {
        console.log("User not authenticated. Redirecting to login...");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error in checkAuth:", error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  async function signIn(username, password, emailAddress) {
    const signUser = await SignIn(username, password, emailAddress);
    if (signUser === 1) {
      console.log("ERROR");
    } else if (signUser) {
      setIsAuthenticated(username);
      navigate("/");
    }
  }

  async function logIn(username, password) {
    const logUser = await LogIn(username, password);
    if(logUser === 0){
      setIsAuthenticated(username);
      navigate("/");
      return 0;
    }
  }

  async function logOut(){
    await LogOut();
    setIsAuthenticated(null);
  }

  return (
    <UserSigned.Provider value={{ isAuthenticated, signIn, logIn, logOut }}>
      {children}
    </UserSigned.Provider>
  );
}

export default UserSignedProvider;