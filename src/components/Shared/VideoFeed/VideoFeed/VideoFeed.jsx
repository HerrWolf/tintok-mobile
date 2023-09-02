import { useRef } from "react";
import { View, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { Video } from "expo-av";
import { styles } from "./VideoFeed.styles";

export const VideoFeed = ({ item }) => {
  // console.log(item);

  const video = useRef(null);

  const startPauseVideo = () => {
    console.log("startPauseVideo");
  };
  return (
    <Pressable style={styles.content} onPress={startPauseVideo}>
      <Video ref={video} style={styles.video} source={{ uri: item.video }} />

      <View style={styles.blockContent}>
        <View style={styles.blockLeft}>
          <Text>{item.user_data.username}</Text>
          <Text style={{ marginBottom: 25 }}>{item.description}</Text>
        </View>
        <View style={styles.blockRight}>
          <Text>Profile</Text>
          <Text>Likes</Text>
          <Text>Comments</Text>
          <Text>Share</Text>
        </View>
      </View>

      {/* TODO: timeline */}
    </Pressable>
  );
};
