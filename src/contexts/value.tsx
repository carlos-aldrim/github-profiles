import { darkTheme, lightTheme } from "config/theme";
import React from "react";
import { API } from "services/API";
import { UserInfo } from "services/interface";

interface ValueContextProps {
  user: UserInfo | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
  filteredUser: (username: string) => void;
  theme: "ligth" | "dark" | string;
  toggleTheme: (theme: string) => void;
  getTheme: () => typeof darkTheme | typeof lightTheme;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

interface ValueProviderProps {
  children: React.ReactNode;
};

export const ValueContext = React.createContext({} as unknown as (ValueContextProps));

export const ValueProvider: React.FC<ValueProviderProps> = ({children}) => {
  const [user, setUser] = React.useState<UserInfo>();
  const [theme, setTheme] = React.useState("dark");
  const [error, setError] = React.useState("");

  const toggleTheme = (theme: string) => {
    setTheme(theme);
  };

  const getTheme = () => {
    return theme === "light" ? lightTheme : theme === "dark" ? darkTheme : lightTheme;
  };

  const filteredUser = async (username: string) => {
    try {
      if(username !== null && username !== undefined) {
        setError("");
        const mainData = (await API.get(`/${username}`)).data;
        const reposList = (await API.get(`/${username}/repos`)).data;
        const followersList = (await API.get(`/${username}/followers`)).data;
        const followingList = (await API.get(`/${username}/following`)).data;
        const starsList = (await API.get(`/${username}/starred`)).data;
        const countStars = starsList.lenght;
        const userData = {
          ...mainData,
          reposList,
          followersList,
          followingList,
          starsList,
          countStars,
        }
        setUser(userData);
      }
    }catch(error) {
      setError("Usuário não encontrado");
    }
  };
  
  return (
    <ValueContext.Provider value={{
      user,
      setUser,
      filteredUser,
      theme,
      toggleTheme,
      getTheme,
      error,
      setError,
    }}>
      {children}
    </ValueContext.Provider>
  );
};