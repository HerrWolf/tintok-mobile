import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import { Auth } from "../../../api";
import { initialValues, validationSchema } from "./RegisterEmailScreen.data";
import { styles } from "./RegisterEmailScreen.styles";

const auth = new Auth();

export const RegisterEmailScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await auth.register(formValue);
        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.form}>
        <Input
          placeholder="Correo electrónico"
          autoCapitalize="none"
          onChangeText={(text) =>
            formik.setFieldValue("email", text.toLowerCase())
          }
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Nombre"
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue("first_name", text)}
          errorMessage={formik.errors.first_name}
        />
        <Input
          placeholder="Username"
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue("username", text)}
          errorMessage={formik.errors.username}
        />
        <Input
          placeholder="Password"
          secureTextEntry={!showPassword}
          rightIcon={{
            type: "material-community",
            name: showPassword ? "eye-off-outline" : "eye-outline",
            onPress: onShowPassword,
          }}
          onChangeText={(text) => formik.setFieldValue("password", text)}
          errorMessage={formik.errors.password}
        />
        <Input
          placeholder="Repetir Password"
          secureTextEntry={!showPassword}
          rightIcon={{
            type: "material-community",
            name: showPassword ? "eye-off-outline" : "eye-outline",
            onPress: onShowPassword,
          }}
          onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
          errorMessage={formik.errors.repeatPassword}
        />
      </View>
      <Button
        title="Registrate"
        containerStyle={styles.btnContainer}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </SafeAreaView>
  );
};
