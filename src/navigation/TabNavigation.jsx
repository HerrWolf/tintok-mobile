import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import {
  HomeStack,
  FriendsStack,
  UploadStack,
  NotificationStack,
  AccountSatack,
} from "./stacks";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#252525", borderTopWidth: 0 },
        tabBarIcon: (props) => tabIcons({ route, ...props }),
      })}
    >
      <Tab.Screen
        name={screen.home.tab}
        component={HomeStack}
        options={{ headerShown: false, title: "Inicio" }}
      />
      <Tab.Screen
        name={screen.friends.tab}
        component={FriendsStack}
        options={{ headerShown: false, title: "Amigos" }}
      />
      <Tab.Screen
        name={screen.upload.tab}
        component={UploadStack}
        options={{ headerShown: false, tabBarLabelStyle: { display: "none" } }}
      />
      <Tab.Screen
        name={screen.notifications.tab}
        component={NotificationStack}
        options={{ headerShown: false, title: "Notificaciones" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountSatack}
        options={{ headerShown: false, title: "Perfil" }}
      />
    </Tab.Navigator>
  );
};

const tabIcons = ({ route, size, color, focused }) => {
  let iconName = "plus";

  if (route.name === screen.home.tab) {
    iconName = focused ? "home" : "home-outline";
  }

  if (route.name === screen.friends.tab) {
    iconName = focused ? "account-multiple" : "account-multiple-outline";
  }

  if (route.name === screen.notifications.tab) {
    iconName = focused ? "message-processing" : "message-processing-outline";
  }

  if (route.name === screen.account.tab) {
    iconName = focused ? "account" : "account-outline";
  }

  if (route.name === screen.upload.tab) {
    return (
      <Icon
        type="material-community"
        name="plus"
        size={size}
        color={color}
        containerStyle={{
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 6,
        }}
        iconStyle={{ color: "#000", fontSize: 14 }}
      />
    );
  }

  return <Icon type="material-community" name={iconName} size={20} />;
};
