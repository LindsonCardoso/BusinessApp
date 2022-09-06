import { StatusBar, StyleSheet } from "react-native";
import theme from '../../styles/theme'


export const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },

});
