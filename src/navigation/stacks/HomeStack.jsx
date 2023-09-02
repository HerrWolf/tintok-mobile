import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../../screens/Home";
import { screen } from "../../utils";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.home.home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
