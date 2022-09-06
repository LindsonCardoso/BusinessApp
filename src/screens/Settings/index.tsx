
import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext';

export default function Setting() {

  const { signOut } = useContext(AuthContext)

  return (

      <View style={styles.container}>
      <Text>Configurações</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor: "#FFF",
    alignItems: 'center',
        justifyContent: 'center',
    }
});
