
import React from 'react';

import { View, TouchableOpacity, Image, StyleSheet, Text, StatusBar } from 'react-native';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';

import { RFValue } from 'react-native-responsive-fontsize';
import theme from '@styles/theme';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';


interface btnProps {
   title?: string;
   contato?: string;
   email?: string;
   endereco?: string;
}


const ButtonWhatsApp: React.FC<btnProps> = ({ contato,...rest }) => {
   return (
         <TouchableOpacity style={styles.containerBtnWTAPP}>
            <Ionicons
               name={'md-logo-whatsapp'}
               color={theme.COLORS.BACKGROUNDLIGHT}
               size={22}
            />
            <Text style={styles.textContact}>
               {contato}
            </Text>
         </TouchableOpacity>

   );
}


const ButtonEmail: React.FC<btnProps> = ({ title, email }) => {
   return (
      <TouchableOpacity style={styles.containerBtnEmail}>
         <Ionicons
            name={'mail'}
            color={theme.COLORS.BACKGROUNDLIGHT}
            size={22}
         />
         <Text style={styles.textContactEmail}>
            {title}
         </Text>
      </TouchableOpacity>
   );
}


export { ButtonWhatsApp, ButtonEmail }
