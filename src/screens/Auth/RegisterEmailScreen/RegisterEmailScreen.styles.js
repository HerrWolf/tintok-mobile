import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  content: {
    height: "100%",
    marginHorizontal: 15,
    justifyContent: "space-between",
  },
  form: {
    marginTop: Platform.OS === "ios" ? 20 : 70,
  },
  btnContainer: {
    marginBottom: 20,
  },
});
