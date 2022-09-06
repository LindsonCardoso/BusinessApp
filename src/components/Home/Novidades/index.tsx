//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';

export interface newParamsList {
  cover: any;
  name: string;
  description: string;
}

// create a component
export default function Novidade({ cover, description, name }: newParamsList) {
  return (

    <TouchableOpacity
      style={styles.container}>
      <Image
        source={cover}
        style={styles.imageCove}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {name}
        </Text>

        <View style={styles.dot}>
        </View>

        <Text style={styles.badge}>
          Novo
        </Text>
      </View>


      <Text style={styles.description}>
        {description}
      </Text>

      <View style={styles.footer}>
        <View style={{ width: '80%' }} >
          <Text style={styles.price}>R$ 122.000,00</Text>
        </View>
        <View style={{ width: '20%' }}>
          <Ionicons
            name="ios-add-circle"
            size={24}
            color="black"
          />
        </View>
      </View>
    </TouchableOpacity>

  );
};
