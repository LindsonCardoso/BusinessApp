import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   searchBar:{
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: 20,
      marginBottom: 20,
   },
   inputArea: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '98%',
      backgroundColor:  '#FFF',
      elevation: 2,
      paddingHorizontal: 10,
      height: 37,
      borderRadius: 10,
   },
   input: {
      fontFamily: 'Poppins_500Medium',
      paddingHorizontal: 10,
      fontSize: 13,
      width: '90%'
   }
});
