import React from 'react'
import { View, Image, Text } from "react-native";
import theme from '../../styles/theme';
import { assets } from '../../utils/'

interface PropsTitleCard {
   title: string;
   subTitle: string;
   titleSize: number;
   subTitleSize: number;
}

export interface PropsPriceCard {
   price: string;
}

const CardTitle: React.FC<PropsTitleCard> = ({ subTitle, subTitleSize, title, titleSize }) => {
   return (
      <View>
         <Text
            style={{
               fontFamily: 'Poppins_600SemiBold',
               fontSize: titleSize,
               color: theme.COLORS.primary,
            }}
         >
            {title}
         </Text>
         <Text
            style={{
               fontFamily: 'Poppins_400Regular',
               fontSize: subTitleSize,
               color: theme.COLORS.primary,
            }}
         >
            by {subTitle}
         </Text>
      </View>
   );
}

const CardPrice: React.FC<PropsPriceCard> = ({ price }) => {
   return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
         <Text
            style={{
               fontFamily: 'Poppins_500Medium',
               fontSize: theme.SIZES.large,
               color: theme.COLORS.PIN_TEXT,
            }}
         >
         $ {price} k
         </Text>
      </View>
   );
}

const ImageCmp = ({ imgUrl, index }) => {
   return (
      <Image
         source={imgUrl}
         resizeMode="contain"
         style={{
            width: 48,
            height: 48,
            marginLeft: index === 0 ? 0 : -theme.SIZES.font,
         }}
      />
   );
};

export const People = () => {
   return (
      <View style={{ flexDirection: "row" }}>
         {[assets.person02].map(
            (imgUrl, index) => (
               <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
            )
         )}
      </View>
   );
};


export const EndDate = () => {
   return (
      <View
         style={{
            paddingHorizontal: theme.SIZES.font,
            paddingVertical: theme.SIZES.base,
            backgroundColor: theme.COLORS.BACKGROUNDLIGHT,
            borderRadius: theme.SIZES.font,
            justifyContent: "center",
            alignItems: "center",
            ...theme.SHADOWS.light,
            elevation: 1,
            maxWidth: "50%",
         }}
      >
         <Text
            style={{
               fontFamily: 'Poppins_400Regular',
               fontSize: theme.SIZES.small,
               color: theme.COLORS.primary,
            }}
         >
            Postado
         </Text>
         <Text
            style={{
               fontFamily: 'Poppins_600SemiBold',
               fontSize: theme.SIZES.medium,
               color: theme.COLORS.primary,
            }}
         >
            1h 30m
         </Text>
      </View>
   );
};

const SubInfo = () => {
   return (
      <View
         style={{
            width: "100%",
            paddingHorizontal: theme.SIZES.font,
            marginTop: -theme.SIZES.extraLarge,
            flexDirection: "row",
            justifyContent: "space-between",
         }}
      >
         <People/>
         <EndDate/>
      </View>
   );
};


export { CardTitle, CardPrice, SubInfo }
