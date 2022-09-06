import { StatusBar, StyleSheet } from "react-native";
import theme from '../../styles/theme'


export const styles = StyleSheet.create({
   container: {
      flex: 1,
    marginTop: StatusBar.currentHeight || 0,
   },
   headerBar: {
      paddingHorizontal: 15,
      flexDirection: 'row',
      width: '100%',
      marginVertical: 35,
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   headerTitle: {
      fontFamily: 'Poppins_700Bold',
      fontSize: 25,
      fontWeight: '500',
   },
   searchBar:{
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
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
   },
   contentNew: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center'
   },
   title: {
      paddingHorizontal: 15,
      fontSize: 18,
      color: '#4f4a4a',
      fontFamily: 'Poppins_700Bold',
   }
});
