import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UploadScreen, PublishVideoScreen } from "../../screens/Upload";
import { screen } from "../../utils";

const Stack = createNativeStackNavigator();

export const UploadStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.upload.upload}
        component={UploadScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screen.upload.publishVideo}
        component={PublishVideoScreen}
        options={{ title: "Publicar" }}
      />
    </Stack.Navigator>
  );
};
