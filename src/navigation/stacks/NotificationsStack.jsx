import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotificationsScreen } from "../../screens/Notifications";
import { screen } from "../../utils";

const Stack = createNativeStackNavigator();

export const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.notifications.notifications}
        component={NotificationsScreen}
        options={{ title: "Notificaciones" }}
      />
    </Stack.Navigator>
  );
};
