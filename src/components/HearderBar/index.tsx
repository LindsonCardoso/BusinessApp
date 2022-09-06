import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context';

interface propsHeader {
   title: string;
}

const HearderBar: React.FC<propsHeader> = ({ title }) => {
   return (
      <View style={styles.headerBar}>
         <Text style={styles.headerTitle}>
            {title}
         </Text>
         <TouchableOpacity style={{ marginLeft: 120, }}>
            <Ionicons name='notifications' color="#1D1D2E" size={24} />
         </TouchableOpacity>
      </View>
   )
}

export  { HearderBar }
