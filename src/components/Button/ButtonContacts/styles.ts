import { StyleSheet, StatusBar} from "react-native";
import theme from "@styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
   containerBtnWTAPP: {
      backgroundColor: theme.COLORS.SUCCESS_LIGHT8,
      borderRadius: 10,
      flexDirection: 'row',
      padding: 5,
      justifyContent: 'flex-start',
      width: '52%',
      marginBottom: 10,
   },
   textContact: {
      fontSize: RFValue(18),
      fontFamily:  'Poppins_500Medium',
      color: theme.COLORS.TEXTDARK,
      marginLeft: 9,
   },
   containerBtnEmail: {
      backgroundColor: theme.COLORS.TYPOSOCIAL,
      borderRadius: 10,
      flexDirection: 'row',
      padding: 5,
      justifyContent: 'flex-start',
      width: '52%',
      marginBottom: 10,
   },
   textContactEmail: {
      fontSize: RFValue(18),
      fontFamily:  'Poppins_500Medium',
      color: theme.COLORS.WHITE,
      marginLeft: 9,
   },

})
