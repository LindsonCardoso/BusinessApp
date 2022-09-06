import { StatusBar, StyleSheet } from "react-native";
import theme from '../../styles/theme'

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
   },
   swiperContainer: {
      flex: 0.55
    },
    bottomContainer: {
      flex: 0.45,
      justifyContent: 'space-evenly'
    },
    bottomContainerMeta: { alignContent: 'flex-end', alignItems: 'center' },
    bottomContainerButtons: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    cardImage: {
      width: 160,
      flex: 1,
      resizeMode: 'contain'
    },
    card: {
      flex: 0.45,
      borderRadius: 8,
      shadowRadius: 25,
      shadowColor: theme.COLORS.BACKGROUNDDARK,
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 0 },
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.COLORS.white
    },
    text: {
      textAlign: 'center',
      fontSize: 50,
      backgroundColor: 'transparent',
    },
    done: {
      textAlign: 'center',
      fontSize: 30,
      color: theme.COLORS.white,
      backgroundColor: 'transparent'
    },
    heading: { fontSize: 24, marginBottom: 10, color: theme.COLORS.gray },
    price: { color: theme.COLORS.BLUE, fontSize: 32, fontWeight: '500' }

});
