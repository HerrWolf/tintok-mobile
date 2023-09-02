import { View } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./Info.styles";
import { useState } from "react";

export const Info = ({ username, description }) => {
  const [showLines, setShowLines] = useState(2);

  const openCloseDescription = () => {
    setShowLines(showLines === 2 ? 100 : 2);
  };

  return (
    <View style={styles.content}>
      <Text style={styles.username}>@{username}</Text>
      <Text numberOfLines={showLines}>{description}</Text>
      <Text style={styles.readMore} onPress={openCloseDescription}>
        {showLines === 2 ? "Ver más" : "Ocultar"}
      </Text>
    </View>
  );
};
