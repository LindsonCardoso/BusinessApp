import styled from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.COLORS.WHITE};
   border-radius:  ${({ theme }) => RFValue(theme.SIZES.font)}px;
   margin-bottom:  ${({ theme }) => RFValue(theme.SIZES.extraLarge)}px;
   margin:  ${({ theme }) => RFValue(theme.SIZES.base)}px;
`;

export const Contents = styled.View`
   width: '100%';
   height: ${RFValue(250)}px;
`;

export const ImagePost = styled.Image`
   width: "100%";
   height: "100%";
   border-top-left-radius: ${({ theme }) => RFValue(theme.SIZES.font)}px;
   border-top-right-radius: ${({ theme }) => RFValue(theme.SIZES.font)}px;
`;

export const Info = styled.View`
   width: '100%';
   padding: ${({ theme }) => RFValue(theme.SIZES.font)}px;

`;

export const Price = styled.View`
   margin-top: ${({ theme }) => RFValue(theme.SIZES.font)}px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;
