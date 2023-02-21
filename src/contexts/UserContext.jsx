import { createContext } from "react";
import { useLocalStorage } from "../hooks/localStorage";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const isLoggedIn = !!user;

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, handleLogOut }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
