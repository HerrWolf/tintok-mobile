import { useRef, useState, useCallback } from "react";
import { View, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { useFocusEffect } from "@react-navigation/native";
import { Video } from "expo-av";
import { Info } from "../Info";
import { TimeLine } from "../TimeLine";
import { styles } from "./VideoFeed.styles";

export const VideoFeed = ({ index, item, indexShow }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [videoStatus, setVideoStatus] = useState(null);

  const video = useRef(null);

  useFocusEffect(
    useCallback(() => {
      setIsStarted(index === indexShow);
      return () => {
        setIsStarted(false);
      };
    }, [index, indexShow])
  );

  const startPauseVideo = () => setIsStarted((prevState) => !prevState);
  return (
    <Pressable style={styles.content} onPress={startPauseVideo}>
      <Video
        ref={video}
        style={styles.video}
        source={{ uri: item.video }}
        resizeMode="cover"
        isLooping
        shouldPlay={isStarted}
        onPlaybackStatusUpdate={(status) => setVideoStatus(status)}
      />

      <View style={styles.blockContent}>
        <View style={styles.blockLeft}>
          <Info
            username={item.user_data.username}
            description={item.description}
          />
        </View>
        <View style={styles.blockRight}>
          <Text>Profile</Text>
          <Text>Likes</Text>
          <Text>Comments</Text>
          <Text>Share</Text>
        </View>
      </View>

      {videoStatus && <TimeLine status={videoStatus} />}
    </Pressable>
  );
};
