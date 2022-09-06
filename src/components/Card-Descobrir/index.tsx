import React from 'react'
import { View, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { rootStackParamsList } from '@routes/app.routes';

import SIZES from '../../styles/theme'
import {
   Container, Contents, ImagePost, Info, Price,
} from './styles'

import { SubInfo, CardTitle, CardPrice } from '../SubInfo'
import { CircleButton, ReactButton } from '../../components/Button'
import assets from '../../utils/assets'
import theme from '../../styles/theme';

export type PropsItemsPost = {
   id: string;
   name: string;
   creator: string;
   price: string;
   description: string;
   image: {
      img_1: any;
      img_2: any;
      img_3: any;
   };
}

interface Props {
   data: PropsItemsPost;
}

const CardDescobrir: React.FC<Props> = ({ data, ...rest }) => {

   const navigation = useNavigation<NativeStackNavigationProp<rootStackParamsList>>();

   console.log(data.id)

   return (
      <View
         style={{
            backgroundColor: theme.COLORS.white,
            borderRadius: theme.SIZES.font,
            marginBottom: theme.SIZES.large,
            margin: theme.SIZES.base,
            ...theme.SHADOWS.dark,
         }}
      >
         <View
            style={{
               width: "100%",
               height: 280,
            }}
         >
            <Image
               source={data.image.img_1}
               resizeMode="cover"
               style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: theme.SIZES.font,
                  borderTopRightRadius: theme.SIZES.font,
               }}
            />
            <CircleButton
               imgUrl={assets.heart}
               right={10}
               top={10} />
         </View>


         <View style={{ width: "100%", padding: theme.SIZES.font }}>
            <View
               style={{
                  marginTop: theme.SIZES.font,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",

               }}
            >
               <CardTitle
                  title={data.name}
                  subTitle={data.creator}
                  titleSize={theme.SIZES.large}
                  subTitleSize={theme.SIZES.small}
               />
               <ReactButton
                  title='Ver'
                  color={theme.COLORS.PIN_PRIMARY}
                  minWidth={120}
                  fontSize={theme.SIZES.small}
                  handlePress={() => navigation.navigate('Detalhe', { data: data })}
               />
            </View>
            <View
               style={{
                  marginTop: theme.SIZES.font,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
               }}
            >
               <CardPrice
                  price={data.price}
               />
               <ReactButton
                  color={theme.COLORS.PIN_PRIMARY}
                  title={'Contratar'}
                  minWidth={120}
                  fontSize={theme.SIZES.small}
                  handlePress={() => alert('Teste')}
               />
            </View>
         </View>
      </View>
   )
}

export { CardDescobrir }
