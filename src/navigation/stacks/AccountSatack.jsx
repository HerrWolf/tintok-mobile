import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AccountScreen,
  SettingsScreen,
  ChangeNameScreen,
  ChangeDescriptionScreen,
  ChangeWebsiteScreen,
  ChangeInstagramScreen,
} from "../../screens/Account";
import { screen } from "../../utils";

const Stack = createNativeStackNavigator();

export const AccountSatack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{ title: "" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name={screen.account.settings}
          component={SettingsScreen}
          options={{ title: "Ajustes" }}
        />
        <Stack.Screen
          name={screen.account.changeName}
          component={ChangeNameScreen}
          options={{ title: "Nombre" }}
        />
        <Stack.Screen
          name={screen.account.changeDescription}
          component={ChangeDescriptionScreen}
          options={{ title: "Descripcion" }}
        />
        <Stack.Screen
          name={screen.account.changeWebsite}
          component={ChangeWebsiteScreen}
          options={{ title: "Sitio web" }}
        />
        <Stack.Screen
          name={screen.account.changeInstagram}
          component={ChangeInstagramScreen}
          options={{ title: "Instagram" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
