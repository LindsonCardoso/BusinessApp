import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = StyleSheet.create({
   container: {
      marginTop: 20,
      backgroundColor: '#FFF',
      height: 250,
      width: 200,
      elevation: 2,
      borderRadius: 10,
      padding: 15,
      marginRight: 30,
      marginLeft: 2,
      marginBottom: 5,
   },
   imageCove: {
      width: 170,
      height: 110,
      borderRadius: 10
   },
   content: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
   },
   title: {
      fontFamily: 'Poppins_700Bold',
      fontSize: 14,
      color: '#4f4a4a'
   },
   dot: {
      width: 4,
      height: 4,
      borderRadius: 4,
      backgroundColor: 'red',
      marginHorizontal: 4,
   },
   badge: {
      color: 'red',
      fontSize: 9,
      fontFamily: 'Poppins_700Bold'
   },
   description: {
      fontFamily: 'Poppins_400Regular',
      fontSize: 9,
      color: '#4f4a4a'

   },
   footer: {
      flexDirection: 'row',
      marginTop: 5,
      alignItems: 'center',
      width: '100%'
   },
   price: {
      fontSize: 15,
      fontFamily: 'Poppins_700Bold'

   }
})
