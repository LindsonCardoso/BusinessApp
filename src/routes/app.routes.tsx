import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, Platform } from 'react-native'
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from '@expo/vector-icons/Ionicons';

import Descobrir from '../screens/Descobrir';
import { Detalhes } from '../screens/Descobrir/Detalhe';

import Settings from '../screens/Settings';

import Favorito from '../screens/Favorito';

import Home from '../screens/Home';

import Anuncie from '../screens/Anuncie';
import { NavigatorScreenParams } from '@react-navigation/native';
import { PropsItemsPost  } from '../components/Card-Descobrir'

export type rootStackParamsList = {
   Buttom: NavigatorScreenParams<HomeTabsParamList>
   Detalhe: {
         data: PropsItemsPost
   };
}

export type HomeTabsParamList = {
   BusinessClub: undefined;
   Descobrir: undefined;
   Favorito: undefined;
   Anuncie: undefined
   Conta: undefined;
}

const Stack = createNativeStackNavigator<rootStackParamsList>()
const Tab = createBottomTabNavigator<HomeTabsParamList>()

function TabScreen() {
   return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: '#FFF',
            tabBarInactiveTintColor: '#FFF',
            tabBarStyle: {
               paddingVertical: Platform.OS === 'ios' ? 20 : 0,
               backgroundColor: '#1D1D2E',
            },
            headerTitleStyle: {
               fontFamily: 'Poppins_700Bold'
            },
            tabBarIcon: ({ focused, size, color }) => {
               let iconName;
               if (route.name === 'BusinessClub') {
                  iconName = focused ? 'home-sharp' : 'home-outline';
                  size = focused ? size + 8 : size + 2;
               } else if (route.name === 'Descobrir') {
                  iconName = focused ? 'ios-flame-sharp' : 'ios-flame-outline';
               } else if (route.name === 'Favorito') {
                  iconName = focused
                     ? 'caret-forward-circle'
                     : 'caret-forward-circle-outline';
               } else if (route.name === 'Anuncie') {
                  iconName = focused ? 'ios-heart' : 'ios-heart-outline';
               } else if (route.name === 'Conta') {
                  iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
               }

               return <Ionicons name={iconName} size={size} color={color} />;
            },
         })}>
         <Tab.Screen name="BusinessClub" component={Home} />
         <Tab.Screen name="Descobrir" component={Descobrir} />
         <Tab.Screen name="Favorito" component={Favorito} />
         <Tab.Screen name="Anuncie" component={Anuncie} />
         <Tab.Screen name="Conta" component={Settings} />
      </Tab.Navigator>
   )
}

const AppRoutes = () => {
   return (
      <Stack.Navigator
      screenOptions={{  headerShown: false}}
         initialRouteName="Buttom"
         >
         <Stack.Screen name="Buttom" component={TabScreen}  />
         <Stack.Screen name="Detalhe" component={Detalhes} />
      </Stack.Navigator>
   )
}



export default AppRoutes;
