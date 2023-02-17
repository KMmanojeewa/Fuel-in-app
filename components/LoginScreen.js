import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const callLogin = () => {
        callLogin({name:username, pass:password}).then((data) => {
            console.log(data)
            storeData('aaaatest')
        });
    }

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          // saving error
        }
      }

      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@storage_Key')
          if(value !== null) {
            // value previously stored
            return value;
          }
        } catch(e) {
          // error reading value
        }
      }
      

  return (
    <View style={style.container}>
      <Text>Login Screen</Text>
      <Text>{getData}</Text>

      <TextInput
      label="User Name"
      value={username}
      onChangeText={text => setUsername(text)}
    />

<TextInput
      label="Password"
      value={password}
      onChangeText={text => setPassword(text)}
    />


<Button 
icon="lock" 
mode="contained" 
onPress={() => callLogin()}>
    Login
  </Button>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
