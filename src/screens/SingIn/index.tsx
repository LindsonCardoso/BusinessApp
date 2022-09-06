
import React, { useContext, useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native'

import { AuthContext } from '../../contexts/AuthContext'
import theme from '../../styles/theme'
const SingIn = () => {

  //ESTADOS / VARIAVEIS



  const { signIn, loadingAuth } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //FUNCTIONS

  async function handleLogin() {
    //if (email === '' || password == '') return;

    await signIn({ email, password })
  }



  return (
    <View style={styles.container}>


        <Text style={{
           fontSize: 27,
           fontFamily: "Poppins_800ExtraBold",
            color: '#101026',
         }}>BUSINESS CLUB</Text>


      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Digite seu email'
          style={styles.input}
          placeholderTextColor="#101026"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder='Digite sua senha'
          style={styles.input}
          placeholderTextColor="#101026"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.buttonAcessar} onPress={handleLogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={27} color='#101026' />
            ) : (
              <Text style={styles.textbuttonAcessar}>Acessar</Text>
            )
          }
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUNDLIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
     marginBottom: 18,
   },

  inputContainer: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14
  },
  input: {
    width: '95%',
    height: 40,
    backgroundColor: theme.COLORS.GRAY4,
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#101026',
  },
  buttonAcessar: {
    width: '95%',
    height: 40,
     backgroundColor:  theme.COLORS.TITLE,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textbuttonAcessar: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
     borderRadius: 10,
    color: theme.COLORS.WHITE_100,
  }
});

export default SingIn
