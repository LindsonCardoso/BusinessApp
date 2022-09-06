import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   ScrollView,
   TextInput,
   SafeAreaView
} from 'react-native'
import React, { useContext } from 'react'
import Novidades from '../../components/Home/Novidades'

import { AuthContext } from '../../contexts/AuthContext';
import { styles } from './styles';

import { Recomendados } from '../../components/Home/Recomendados';
import { HearderBar } from '../../components/HearderBar';
import { SearchBar } from '../../components/SearchBar';

export default function Home() {
   const { signOut } = useContext(AuthContext)




   return (
      <SafeAreaView style={styles.container}>
         <HearderBar title='Business Club'/>
         <SearchBar />

         <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ }}
         >


            <View style={styles.contentNew}>
               <Text style={styles.title}> Novidades</Text>
            </View>

            <ScrollView
               horizontal={true}
               showsVerticalScrollIndicator={false}
               showsHorizontalScrollIndicator={false}
               style={{ paddingHorizontal: 15, }}
            >
               <Novidades
                  cover={require('../../assets/house1.jpg')}
                  name='Casa 1'
                  description='esta é u,a casa a venda'
               />
               <Novidades
                  cover={require('../../assets/house1.jpg')}
                  name='Casa 1'
                  description='esta é u,a casa a venda'
               />
               <Novidades
                  cover={require('../../assets/house1.jpg')}
                  name='Casa 1'
                  description='esta é u,a casa a venda'
               />
               <Novidades
                  cover={require('../../assets/house1.jpg')}
                  name='Casa 1'
                  description='esta é u,a casa a venda'
               />
            </ScrollView>


            <Text style={[styles.title, { marginTop: 20 }]}>
               Filtrar
            </Text>

            <ScrollView
               horizontal
               showsHorizontalScrollIndicator={false}
               style={{ paddingHorizontal: 15}}
            >
               <Recomendados
                  cover={require('../../assets/house1.jpg')}
                  house="Mansão"
                  offer=""
               />
                 <Recomendados
                  cover={require('../../assets/house2.jpg')}
                  house="Carros"
                  offer=""
               />
                 <Recomendados
                  cover={require('../../assets/house3.jpg')}
                  house=""
                  offer=""
               />
            </ScrollView>

         </ScrollView>
      </SafeAreaView>
   )
}
