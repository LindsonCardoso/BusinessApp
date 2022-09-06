import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchBar: React.FC = () => {
   return (
      <View style={styles.searchBar}>
         <View style={styles.inputArea}>
            <Ionicons
               name='search'
               size={24}
               color='gray'
            />
            <TextInput
               placeholder='O que está procurando?'
               style={styles.input}
            />
         </View>
      </View>
   )
}

export { SearchBar };
