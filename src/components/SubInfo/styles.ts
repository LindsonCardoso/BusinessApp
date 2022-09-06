import styled from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
`;

export const TitleCard = styled.Text`
   font-family: 'Poppins_600SemiBold';
   font-size:  ${RFValue(12)}px;
   color: ${({ theme }) => theme.COLORS.WHITE_100};
`;

export const SubTitle = styled.Text`
   font-family: 'Poppins_500Medium';
   font-size: ${RFValue(12)}px;
   color: ${({ theme }) => theme.COLORS.WHITE_100};
`;


export const ContainerPrice = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const IconPrice = styled.Image`
 width: ${RFValue(20)}px;
 height:${RFValue(20)}px;
 margin-right:${RFValue(2)}px;
`;


export const ImageCmp = styled.Image`
   width: ${RFValue(48)}px;
   height: ${RFValue(48)}px;
`;
