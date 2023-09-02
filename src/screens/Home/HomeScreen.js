import { useState } from "react";
import { Text } from "react-native-elements";
import { Header, ForYouVideos, FollowingVideos } from "../../components/Home";
import { ENV } from "../../utils";

export const HomeScreen = () => {
  const [typeVideos, setTypeVideos] = useState(ENV.TYPE_VIDEO.FOR_YOU);
  return (
    <>
      <Header typeVideos={typeVideos} setTypeVideos={setTypeVideos} />

      {typeVideos === ENV.TYPE_VIDEO.FOR_YOU ? (
        <ForYouVideos />
      ) : (
        <FollowingVideos />
      )}
    </>
  );
};
