import React from 'react';
import { Image, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from './styles';
import { PropsItemsPost } from '../../components/Card-Descobrir';

type props = {
   data?: PropsItemsPost;
   images: {
      img_1: any;
      img_2: any;
      img_3: any;
  }
}


const SwiperComponent: React.FC<props> = ({ data, images }) => {
  return (
   <Swiper
   style={styles.wrapper}
   dotStyle={{
     backgroundColor: '#000',
     borderColor: '#000',
     borderWidth: 1,
     width: 10,
     height: 10,
     borderRadius: 10,
   }}
   activeDotColor="#FFF"
   activeDotStyle={{
     borderColor: '#000',
     borderWidth: 1,
     width: 10,
     height: 10,
     borderRadius: 10,
   }}
   >

     <View style={styles.slide}>
      <Image
      source={images.img_1}
      style={{ width: '100%', height: 400}}
      />
     </View>

     <View style={styles.slide}>
      <Image
      source={images.img_2}
      style={{ width: '100%', height: 400}}
      />
     </View>

     <View style={styles.slide}>
      <Image
      source={images.img_3}
      style={{ width: '100%', height: 400}}
      />
     </View>

   </Swiper>
  )
}

export {SwiperComponent}
