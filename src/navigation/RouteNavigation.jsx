import { StatusBar } from "react-native";
import { useTheme, useAuth } from "../hooks";
import { AuthNavigation } from "./AuthNavigation";
import { AppNavigation } from "./AppNavigation";

export const RouteNavigation = () => {
  const { auth } = useAuth();
  const { darkMode } = useTheme();

  return (
    <>
      <StatusBar
        animated
        // barStyle={darkMode ? "dark-content" : "light-content"}
        barStyle="light-content"
      />

      {auth ? <AppNavigation /> : <AuthNavigation />}
    </>
  );
};
