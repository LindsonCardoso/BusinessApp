
import { StyleSheet, StatusBar} from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
   button: {
      width: 40,
      height: 40,
      backgroundColor: theme.COLORS.white,
      position: "absolute",
      borderRadius: theme.SIZES.extraLarge,
      alignItems: "center",
      justifyContent: "center",
      ...theme.SHADOWS.light
   }
})
