import React from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { CircleButton } from '../../components/Button';
import assets from '../../utils/assets';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { rootStackParamsList } from '@routes/app.routes';
import { useNavigation, useRoute } from '@react-navigation/native'
import { SwiperComponent } from '../../components/SwiperComponent';

interface propsHeaderStack {
   id?: string;
   name?: string;
   creator?: string;
   price?: string;
   description?: string;
   image?: any;
}

type props = {
   data?: propsHeaderStack;
   images: {
      img_1: any;
      img_2: any;
      img_3: any;
  }
}

const HeaderStack: React.FC<props> = ({images}) => {
   const navigation = useNavigation()

   const route = useRoute()

   async function voltar(){
      navigation.goBack()
   }

  return (
      <View style={{ width: "100%"}}>
        <SwiperComponent
            images={images}
        />
      </View>
  )
}

export {HeaderStack}
