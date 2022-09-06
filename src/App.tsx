import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes/indext';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
   useFonts,
   Poppins_300Light,
   Poppins_400Regular,
   Poppins_500Medium,
   Poppins_700Bold,
   Poppins_800ExtraBold,
   Poppins_600SemiBold,
} from "@expo-google-fonts/poppins"
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans"
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display"

import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from 'styled-components/native'
import COLORS from './styles/theme'

export default function App() {

   const [appIsReady, setAppIsReady] = useState(false);

   useEffect(() => {
      (async () => {
         try {
            // Pre-load fonts, make any API calls you need to do here
            await SplashScreen.preventAutoHideAsync();
            await Font.loadAsync({
               Poppins_300Light,
               Poppins_400Regular,
               Poppins_500Medium,
               Poppins_700Bold,
               Poppins_800ExtraBold,
               DMSans_400Regular,
               DMSerifDisplay_400Regular,
               Poppins_600SemiBold
            })
         } catch (e) {
            //ss
         } finally {
            // Tell the application to render
            setAppIsReady(true);
         }
      })();

   }, [])

   const onLayoutRootView = useCallback(() => {
      if (appIsReady) {
         SplashScreen.hideAsync();
      }
   }, [appIsReady]);

   if (!appIsReady) return null;


   return (

      <ThemeProvider theme={COLORS}>
         <View onLayout={onLayoutRootView} style={styles.container}>
            <NavigationContainer>
               <AuthProvider>
                  <StatusBar
                     style={'dark'}
                     translucent
                     backgroundColor='transparent'
                     animated={true}
                  />
                  <Routes />
               </AuthProvider>
            </NavigationContainer>
         </View>
      </ThemeProvider>
   );
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
});
