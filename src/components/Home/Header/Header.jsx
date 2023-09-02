import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./Header.styles";
import { ENV } from "../../../utils";

export const Header = ({ typeVideos, setTypeVideos }) => {
  const onChangeTypeVideo = (type) => {
    setTypeVideos(type);
  };

  return (
    <SafeAreaView style={styles.content}>
      <Pressable onPress={() => onChangeTypeVideo(ENV.TYPE_VIDEO.FOLLOWING)}>
        <Text
          style={
            typeVideos === ENV.TYPE_VIDEO.FOLLOWING
              ? styles.active
              : styles.inactive
          }
        >
          Siguiendo
        </Text>
      </Pressable>

      <Text> | </Text>

      <Pressable onPress={() => onChangeTypeVideo(ENV.TYPE_VIDEO.FOR_YOU)}>
        <Text
          style={
            typeVideos === ENV.TYPE_VIDEO.FOR_YOU
              ? styles.active
              : styles.inactive
          }
        >
          Para ti
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
