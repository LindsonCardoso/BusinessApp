import React, { useContext, useState } from 'react'
import {
   View,
   Text,
   Image,
   FlatList,
   SafeAreaView,
   StatusBar,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars';

import { styles } from './styles'
import { PropsItemsPost } from '../../../components/Card-Descobrir'
import { HeaderStack } from '@components/HeaderStack';
import { SwiperComponent } from '../../../components/SwiperComponent';
import { CircleButton } from '../../../components/Button';
import assets from '../../../utils/assets';

type props = {
   data: PropsItemsPost;
}

const Detalhes: React.FC = () => {
   const navigation = useNavigation();
   const route = useRoute();

   const { data } = route.params as props

   return (
      <>
         <HeaderStack
            images={data.image}
         />
         <SafeAreaView style={styles.container}>
            <View style={styles.headerContent}>
               <View style={{ width: '65%' }}>
                  <Text style={styles.house}>{data.name}</Text>
               </View>

               <View style={{ width: '35%' }}>
                  <Text style={styles.rating}>Avaliações</Text>
                  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                     <Stars
                        default={4}
                        count={5}
                        half={true}
                        starSize={20}
                        fullStar={<Ionicons name="md-star" size={24} style={styles.myStarStyle} />}
                        emptyStar={<Ionicons name="md-star-outline" size={24} style={styles.myStarStyle} />}
                        halfStar={<Ionicons name="md-star-half" size={24} style={styles.myStarStyle} />}
                     />
                  </View>
               </View>
            </View>

            <Text style={styles.price}>
               R$ 1.200,20
            </Text>
            <Text style={styles.description}>
               Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, marginTop: 35 }}>
               <View style={styles.slide}>
                  <Image
                     source={require('../../../assets/house1.jpg')}
                     style={{ width: 90, height: 90, borderRadius: 8 }}
                  />
               </View>

               <View style={styles.slide}>
                  <Image
                     source={require('../../../assets/house2.jpg')}
                     style={{ width: 90, height: 90, borderRadius: 8 }}
                  />
               </View>

               <View style={styles.slide}>
                  <Image
                     source={require('../../../assets/house3.jpg')}
                     style={{ width: 90, height: 90, borderRadius: 8 }}
                  />
               </View>
            </ScrollView>

         </SafeAreaView>
      </>

   )
}

export { Detalhes }
