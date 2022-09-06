
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { styles } from './styles';
import { data } from '../../utils/profiles'
import { HearderBar } from '../../components/HearderBar';

import Swiper from 'react-native-deck-swiper';
import { Transitioning, Transition } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');


const stackSize = 4;
const ANIMATION_DURATION = 200;
const colors = {
   red: '#EC2379',
   blue: '#0070FF',
   gray: '#777777',
   white: '#ffffff',
   black: '#000000'
};

const transition = (
   <Transition.Sequence>
      <Transition.Out
         type='slide-bottom'
         durationMs={ANIMATION_DURATION}
         interpolation="easeIn"
      />
      <Transition.Together>
         <Transition.In
            type='fade'
            durationMs={ANIMATION_DURATION}
            delayMs={ANIMATION_DURATION / 2}
         />
         <Transition.In
            type='slide-bottom'
            durationMs={ANIMATION_DURATION}
            delayMs={ANIMATION_DURATION / 2}
            interpolation='easeOut'
         />
      </Transition.Together>
   </Transition.Sequence>
)

const swiperRef = React.createRef();
const transitionRef = React.createRef();

const Card = ({ card }) => {
   return (
     <View style={styles.card}>
       <Image source={{ uri: card.image }} style={styles.cardImage} />
     </View>
   );
 };

 const CardDetails = ({ index }) => (
   <View key={data[index].id} style={{ alignItems: 'center' }}>
     <Text style={[styles.text, styles.heading]} numberOfLines={2}>
       {data[index].name}
     </Text>
     <Text style={[styles.text, styles.price]}>{data[index].price}</Text>
   </View>
 );

export default function Dashboard() {

   const [index, setIndex] = React.useState(0);
   const onSwiped = () => {
     transitionRef.current.animateNextTransition();
     setIndex((index + 1) % data.length);
   };


   const { signOut } = useContext(AuthContext)

   return (
      <SafeAreaView style={styles.container}>
         <HearderBar title='Favorito' />

         <SafeAreaView style={styles.container}>
            <MaterialCommunityIcons
               name='crop-square'
               size={width}
               color={colors.blue}
               style={{
                  opacity: 0.05,
                  transform: [{ rotate: '45deg' }, { scale: 1.6 }],
                  position: 'absolute',
                  left: -15,
                  top: 30
               }}
            />
            <View style={styles.swiperContainer}>
               <Swiper
                  ref={swiperRef}
                  cards={data}
                  cardIndex={index}
                  renderCard={card => <Card card={card} />}
                  infinite
                  backgroundColor={'transparent'}
                  onSwiped={onSwiped}
                  onTapCard={() => swiperRef.current.swipeLeft()}
                  cardVerticalMargin={50}
                  stackSize={stackSize}
                  stackScale={10}
                  stackSeparation={14}
                  animateOverlayLabelsOpacity
                  animateCardOpacity
                  disableTopSwipe
                  disableBottomSwipe
                  overlayLabels={{
                     left: {
                        title: 'Não',
                        style: {
                           label: {
                              backgroundColor: colors.red,
                              borderColor: colors.red,
                              color: colors.white,
                              borderWidth: 1,
                              fontSize: 24
                           },
                           wrapper: {
                              flexDirection: 'column',
                              alignItems: 'flex-end',
                              justifyContent: 'flex-start',
                              marginTop: 20,
                              marginLeft: -20
                           }
                        }
                     },
                     right: {
                        title: 'Gostei',
                        style: {
                           label: {
                              backgroundColor: colors.blue,
                              borderColor: colors.blue,
                              color: colors.white,
                              borderWidth: 1,
                              fontSize: 24
                           },
                           wrapper: {
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                              justifyContent: 'flex-start',
                              marginTop: 20,
                              marginLeft: 20
                           }
                        }
                     }
                  }}
               />
            </View>
            <View style={styles.bottomContainer}>
               <Transitioning.View
                  ref={transitionRef}
                  transition={transition}
                  style={styles.bottomContainerMeta}
               >
                  <CardDetails index={index} />
               </Transitioning.View>
               <View style={styles.bottomContainerButtons}>
                  <MaterialCommunityIcons.Button
                     name='close'
                     size={94}
                     backgroundColor='transparent'
                     underlayColor='transparent'
                     activeOpacity={0.3}
                     color={colors.red}
                     onPress={() => swiperRef.current.swipeLeft()}
                  />
                  <MaterialCommunityIcons.Button
                     name='circle-outline'
                     size={94}
                     backgroundColor='transparent'
                     underlayColor='transparent'
                     activeOpacity={0.3}
                     color={colors.blue}
                     onPress={() => swiperRef.current.swipeRight()}
                  />
               </View>
            </View>
         </SafeAreaView>


      </SafeAreaView>
   )
}

