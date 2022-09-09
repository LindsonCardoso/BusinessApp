import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import theme from "@styles/theme";
import { StatusBar, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: theme.COLORS.BACKGROUNDLIGHT
   },
   swiperContent: {
      flexDirection: 'row',
      height: 230,
      width: '100%',
   },
   headerContent: {
      paddingHorizontal: 20,
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      marginTop: 30
   },

   price: {
      fontFamily: 'Poppins_700Bold',
      fontSize: RFValue(22),
      color: theme.COLORS.TEXTDARK,
   },
   TitleFeed: {
      fontFamily: 'Poppins_700Bold',
      fontSize: RFValue(21),
      color: theme.COLORS.BACKGROUNDDARK,
   },
   rating: {
      fontFamily: 'Poppins_500Medium',
      fontSize: RFValue(11),
      color: '#4f4a4a'
   },
   myStarStyle: {
      color: '#E7A74e',
      backgroundColor: 'transparent',
      textShadowColor: '#000',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 1,
   },
   titleDescription: {
      fontFamily: 'Poppins_700Bold',
      paddingHorizontal: 20,
      color: theme.COLORS.TEXTDARK,
      fontSize:  RFValue(16),
      lineHeight: 20,
      marginBottom: 10,
   },
   description: {
      fontFamily: 'Poppins_500Medium',
      paddingHorizontal: 20,
      color: theme.COLORS.PIN_TEXT,
      fontSize: RFValue(15),
      textAlign: "auto",
      lineHeight: 20,
   },
   titleEndereco: {
      fontFamily: 'Poppins_700Bold',
      paddingHorizontal: 20,
      color: theme.COLORS.TEXTDARK,
      fontSize:  RFValue(16),
      lineHeight: 20,
      marginTop: 20,
   },
   endereco: {
      fontFamily: 'Poppins_500Medium',
      paddingHorizontal: 20,
      color: theme.COLORS.PIN_TEXT,
      fontSize: RFValue(15),
      textAlign: "auto",
      lineHeight: 20,
   },
   slide: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF',
      height: 70,
      borderRadius: 8,
      marginRight: 20,
   },

   containerContacts: {
      flex: 1,
      paddingHorizontal: 20,
      marginTop: 10,
   },
   titleContact: {
      fontFamily: 'Poppins_500Medium',
      fontSize:  RFValue(16),
      marginBottom: 10,
   },
})
