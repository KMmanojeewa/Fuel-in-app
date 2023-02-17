import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function FuelScreen() {
  return (
    <View style={style.container}>
      <Text>Fuel Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
  },
});
