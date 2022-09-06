import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container:{
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
   },
   swiperContent:{
      flexDirection: 'row',
      height: 340,
      width: '100%',
    },
    headerContent:{
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginTop: 20,
    },
    house:{
      fontFamily: 'Poppins_700Bold',
      fontSize: 18,
      color: '#4f4a4a'
    },
    rating:{
      fontFamily: 'Poppins_500Medium',
      fontSize: 9,
      color: '#4f4a4a'
    },
    myStarStyle:{
      color: '#E7A74e',
      backgroundColor: 'transparent',
      textShadowColor: '#000',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 1,
    },
    price:{
      paddingHorizontal: 20,
      fontFamily: 'Poppins_700Bold',
      fontSize: 16,
      color: '#000'
    },
    description:{
      fontFamily: 'Poppins_500Medium',
      paddingHorizontal: 20,
      color: '#b3aeae',
      fontSize: 14,
      lineHeight: 20,
      marginTop: 20,
    },
    slide:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF',
      height: 90,
      borderRadius: 8,
      marginRight: 20,
    }
})
