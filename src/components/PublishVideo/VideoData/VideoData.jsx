import { View, Pressable } from "react-native";
import { Text, Input, Image } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./VideoData.styles";

export const VideoData = ({ formik }) => {
  const selectImageVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      formik.setFieldValue("imageUri", result.assets[0].uri);
    }
  };

  return (
    <View style={styles.content}>
      <Input
        placeholder="Describe tu video"
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        multiline
        onChangeText={(text) => formik.setFieldValue("description", text)}
        errorMessage={formik.errors.description}
      />

      <Pressable style={styles.imageContainer} onPress={selectImageVideo}>
        <Image
          source={{ uri: formik.values.imageUri || null }}
          style={styles.image}
        />
        <Text style={styles.imageText}>Seleccionar portada</Text>
      </Pressable>
    </View>
  );
};
