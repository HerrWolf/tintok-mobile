import { View } from "react-native";
import { Button } from "react-native-elements";
import { useFormik } from "formik";
import { VideoData } from "../../../components/PublishVideo";
import { Video } from "../../../api";
import { useAuth } from "../../../hooks";
import { screen } from "../../../utils";
import { initialValues, validationSchema } from "./PublishVideoScreen.data";
import { styles } from "./PublishVideoScreen.styles";

const video = new Video();

export const PublishVideoScreen = ({ navigation, route: { params } }) => {
  const { accessToken, auth } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(params.videoUri),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await video.create(accessToken, formValue, auth.user_id);
        navigation.reset({ index: 0, routes: [{ name: screen.home.tab }] });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <View style={styles.content}>
      <VideoData formik={formik} />
      <View style={styles.viewBtnSubmit}>
        <Button
          title="Publicar"
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
      </View>
    </View>
  );
};
