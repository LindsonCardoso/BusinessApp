import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';

interface props {
   cover: any;
   house: string;
   offer: string;
}

const Recomendados: React.FC<props> = ({ cover, house, offer }) => {
   return (
      <View style={{ borderRadius: 20}}>
         <ImageBackground
            source={cover}
            style={styles.container}
            blurRadius={3}
         >
            <Text style={[styles.house, styles.shadow]}>
               {house}
            </Text>

            <Text style={[styles.description, styles.shadow]}>
               {offer} OFF
            </Text>
         </ImageBackground>
      </View>
   );
}

export { Recomendados };
