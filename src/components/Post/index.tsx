import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import assets from '../../utils/assets';

export type PropsItemsPost = {
   id: string;
   name: string;
   creator: string;
   price: string;
   description: string;
   image: any;
}

interface props {
   data: PropsItemsPost;
}

const Post: React.FC<props> = ({ data }) => {
   return (
      <View style={styles.post}>
         <View style={styles.postHeader}>
            <Image source={assets.logo} style={styles.postAvatar} />
            <View>
               <Text style={styles.postUsername}>Rodrigo Gonçalves</Text>
               <Text style={styles.postLocation}>Somewhere</Text>
            </View>
         </View>

         <Image source={data.image} style={styles.cover} />

         <View style={styles.postFooter}>
            <View style={styles.postOptions}>
               <View style={styles.postOptionsSide}>
               </View>
            </View>

            <View style={styles.postAbout}>
               <Image source={assets.person01} style={styles.lastLiked} />
               <Text style={styles.likes}>1</Text>
            </View>
            <Text style={styles.description}>{data.description}</Text>
         </View>
      </View>
   )
}

export { Post };
