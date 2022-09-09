import React, { useContext, useState } from 'react'
import {
   View,
   Text,
   Image,
   SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles'
import { SwiperComponent } from '../../../components/SwiperComponent';

import { PropsItemsPost } from '@routes/app.routes';
import { ButtonEmail, ButtonWhatsApp } from '@components/Button/ButtonContacts';
import { Poppins_100Thin } from '@expo-google-fonts/poppins';
import theme from '@styles/theme';

type props = {
   data: PropsItemsPost;
}

const Detalhes: React.FC = () => {
   const navigation = useNavigation();
   const route = useRoute();

   const { data } = route.params as props

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView showsVerticalScrollIndicator={true} >
            <View style={styles.swiperContent}>
               <SwiperComponent images={data.image} />
            </View>

            <View style={styles.headerContent}>
               <Text style={styles.price}>
                  U$ {data.price}
               </Text>
               <Text style={styles.TitleFeed}>
                  {data.name}
               </Text>
            </View>


            <View
               style={{
                  borderColor: theme.COLORS.GRAY3,
                  borderTopWidth: 0.6,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 12,
                  marginBottom: 12,
               }}></View>



            <View>
               <Text style={styles.titleDescription}>
                  Descrição:
               </Text>
               <Text style={styles.description}>
                  {data.description}
               </Text>
            </View>

            <View>
               <Text style={styles.titleEndereco}>
                  Endereço:
               </Text>
               <Text style={styles.endereco}>
                Rua Joan Faes, Correia, Sorocaba
               </Text>
            </View>

            <View
               style={{
                  borderColor: theme.COLORS.GRAY3,
                  borderTopWidth: 0.6,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 12,
                  marginBottom: 12,
               }}></View>


            <View style={styles.containerContacts}>
               <Text style={styles.titleContact}>
                  Contatos do anúnciante:
               </Text>
               <View>
                  <ButtonWhatsApp contato={data.contact} />
                  <ButtonEmail title='E-mail' email={data.email} />
               </View>

            </View>

         </ScrollView>
      </SafeAreaView>
   )
}

export { Detalhes }
