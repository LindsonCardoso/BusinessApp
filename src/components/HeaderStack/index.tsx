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
      <View style={{ width: "100%", height: 400,}}>
        <SwiperComponent
            images={images}
        />
        <CircleButton
          imgUrl={assets.left}
          handlePress={voltar}
          top={StatusBar.currentHeight + 10}
          left={15}
        />

        <CircleButton
          imgUrl={assets.heart}
          right={15}
          top={StatusBar.currentHeight + 10}
        />
      </View>



  )
}

export {HeaderStack}
