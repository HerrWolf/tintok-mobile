import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Icon } from "react-native-elements";
import { useTheme } from "../../../hooks";
import { screen } from "../../../utils";
import { styled } from "./Authscreen.styles";

export const AuthScreen = ({ navigation }) => {
  const { toogleTheme } = useTheme();
  const styles = styled();

  const goToRegisterEmail = () => {
    navigation.navigate(screen.auth.registerEmail);
  };

  const goToLoginEmail = () => {
    navigation.navigate(screen.auth.loginEmail);
  };

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.optionsContent}>
        <Text style={styles.title}>Registrate en TinTok</Text>
        <Text style={styles.info}>
          Crea un perfil, sigue otras cuentas, sube tus propios videos y más.
        </Text>

        <TouchableOpacity
          onPress={goToRegisterEmail}
          style={styles.itemRegister}
        >
          <Icon type="material-community" name="at" />
          <Text>Usar correo electrónico</Text>
          <View />
        </TouchableOpacity>
      </View>

      <View style={styles.loginContent}>
        <Icon
          type="material-community"
          name="theme-light-dark"
          size={20}
          onPress={toogleTheme}
        />
        <Text>
          ¿Ya tienes una cuenta?{" "}
          <Text style={styles.login} onPress={goToLoginEmail}>
            Iniciar sesión
          </Text>
        </Text>
        <View />
      </View>
    </SafeAreaView>
  );
};
