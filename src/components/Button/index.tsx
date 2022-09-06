
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text , StatusBar} from 'react-native';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';
import theme from '../../styles/theme';
import { styles } from './styles';

interface Props extends RectButtonProps {
   imgUrl: any;
   handlePress?: () => any;
   top?: any;
   right?: number;
   left?: any;
}

interface PropsReactButton {
   title: string;
   color: any;
   minWidth: number;
   fontSize: number;
   handlePress: () => any;
}

const CircleButton: React.FC<Props> = ({ imgUrl, left, right, top, handlePress, ...rest }) => {
   return (
      <TouchableOpacity style={[styles.button, { top, left, right}]} onPress={handlePress}>
         <Image
            source={imgUrl}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
         />
      </TouchableOpacity>
   );
}


const ReactButton: React.FC<PropsReactButton> = ({title, color, minWidth, fontSize, handlePress, ...rest }) => {

   return (
      <TouchableOpacity
         style={{
            backgroundColor: color,
            padding: theme.SIZES.small,
            borderRadius: theme.SIZES.extraLarge,
            minWidth: minWidth,
            ...rest,
         }}
         onPress={handlePress}
      >
         <Text
            style={{
               fontFamily: 'Poppins_600SemiBold',
               fontSize: fontSize,
               color: theme.COLORS.WHITE_100,
               textAlign: "center",
            }}
         >
           {title}
         </Text>
      </TouchableOpacity>
   );
}


export { CircleButton, ReactButton}
