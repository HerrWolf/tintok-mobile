import { View } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./TimeLine.styles";

export const TimeLine = ({ status }) => {
  const totalTime = status.playableDurationMillis;
  const currentTime = status.positionMillis;

  const currentPercent = (currentTime * 100) / totalTime;

  const lineStyle = {
    width: `${currentPercent}%`,
  };

  return <View style={[styles.content, lineStyle]} />;
};
