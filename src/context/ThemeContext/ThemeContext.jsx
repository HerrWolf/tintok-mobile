import { useState, createContext, useEffect } from "react";
import { ThemeProvider as Theme } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { darkTheme } from "./DarkTheme";
import { lightTheme } from "./LightTheme";

export const ThemeContext = createContext({
  darkMode: true,
  toogleTheme: () => null,
  theme: {},
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await AsyncStorage.getItem("theme");
      if (response) setDarkMode(JSON.parse(response));
    })();
  }, []);

  const toogleTheme = async () => {
    setDarkMode(!darkMode);
    await AsyncStorage.setItem("theme", JSON.stringify(!darkMode));
  };

  const data = {
    darkMode,
    toogleTheme,
    theme: darkMode ? darkTheme : lightTheme,
  };

  return (
    <ThemeContext.Provider value={data}>
      <Theme theme={darkMode ? darkTheme : lightTheme}>{children}</Theme>
    </ThemeContext.Provider>
  );
};
