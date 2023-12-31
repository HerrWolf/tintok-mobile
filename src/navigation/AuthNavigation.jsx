import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AuthScreen,
  LoginEmailScreen,
  RegisterEmailScreen,
} from "../screens/Auth";
import { useTheme } from "../hooks";
import { getNavigationTheme, screen } from "../utils";

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  const { theme } = useTheme();
  const MyTheme = getNavigationTheme(theme);

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator options={{ headerTransparent: true }}>
        <Stack.Screen
          name={screen.auth.auth}
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screen.auth.loginEmail}
          component={LoginEmailScreen}
        />
        <Stack.Screen
          name={screen.auth.registerEmail}
          component={RegisterEmailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
