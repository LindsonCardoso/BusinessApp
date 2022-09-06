import React, { useContext, useState } from 'react'
import {
   View,
   Text,
   Image,
   FlatList,
   SafeAreaView
} from 'react-native';

import { AuthContext } from '../../contexts/AuthContext';
import { CardDescobrir } from '../../components/Card-Descobrir/';

import { DataPosts } from '../../utils'
import { HearderBar } from '../../components/HearderBar';
import { styles } from './styles';
import theme from '../../styles/theme';

export default function Descobri() {
   const { signOut } = useContext(AuthContext)

   const [posts, setPosts] = useState(DataPosts)



   return (
      <SafeAreaView style={styles.container}>
         <HearderBar title='Descobrir' />
            <FlatList
               data={DataPosts}
               keyExtractor={item => item.id}
               renderItem={({ item }) =>
                  <CardDescobrir
                     data={item}
                  />}
               showsHorizontalScrollIndicator={false}
               showsVerticalScrollIndicator={false}
            />
      </SafeAreaView>
   );
}
