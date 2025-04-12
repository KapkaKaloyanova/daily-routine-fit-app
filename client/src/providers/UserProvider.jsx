import { UserContext } from "../contexts/UserContext";
import usePersistedState from "../hooks/usePersistedState";

export default function UserProvider({ 
    children, 
}) {
  const [authData, setAuthData] = usePersistedState('auth', {});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };

  const userLogoutHandler = () => {
    localStorage.removeItem('auth'); // optimization: remove from localStorage
    setAuthData({});
  }; // resets UserContext.Provider with an empty object authData 
  

  return (
    <UserContext.Provider
      value={{ ...authData, userLoginHandler, userLogoutHandler }}
    >
      {children}
    </UserContext.Provider>
  );
}
