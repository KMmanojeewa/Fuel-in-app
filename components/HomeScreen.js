import React, { Fragment } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { Divider, List } from 'react-native-paper';

export default function HomeScreen({navigation}) {
  return (<Fragment>
    <View>
    <List.Item
  style={[{backgroundColor: 'powderblue'}]}
    title="Profile"
    description="Check your profile"
    left={props => <List.Icon {...props} icon="home" />}
  />
  <Divider />
  <List.Item
   style={[{backgroundColor: 'powderblue'}]}
    title="Vehicles"
    description="Your vehicles"
    left={props => <List.Icon {...props} icon="car" />}
    onPress={() => navigation.navigate('Vehicles')}
  />
  <Divider />
    <List.Item
     style={[{backgroundColor: 'powderblue'}]}
    title="Fuel Request"
    description="Create a fuel request"
    left={props => <List.Icon {...props} icon="fuel" />}
    onPress={() => navigation.navigate('Fuel')}
  />
  </View>
  
  </Fragment>);
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  