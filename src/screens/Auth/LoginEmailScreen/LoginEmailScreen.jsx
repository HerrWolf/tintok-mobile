import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import { useAuth } from "../../../hooks";
import { initialValues, validationSchema } from "./LoginEmailScreen.data";
import { Auth } from "../../../api";
import { styles } from "./LoginEmailScreen.styles";

const auth = new Auth();

export const LoginEmailScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const onShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await auth.login(formValue);
        login(response);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.form}>
        <Input
          placeholder="Correo Electronico"
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Contraseña"
          secureTextEntry={!showPassword}
          rightIcon={{
            type: "material-community",
            name: showPassword ? "eye-off-outline" : "eye-outline",
            onPress: onShowPassword,
          }}
          onChangeText={(text) => formik.setFieldValue("password", text)}
          errorMessage={formik.errors.password}
        />
      </View>
      <Button
        title="Iniciar Sesión"
        containerStyle={styles.btnContainer}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </SafeAreaView>
  );
};
