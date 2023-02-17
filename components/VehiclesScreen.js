import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { getVehiclesCall } from './request';
import { Divider, List } from 'react-native-paper';
import { Button } from 'react-native-paper';


export default function VehiclesScreen() {

  const [ vehicles, setVehicles ] = useState([]);

  useEffect(() => {

    getVehiclesCall(1).then((data) => {
      console.log('......vvv.....')
      console.log(data.vehicles)
      setVehicles(data.vehicles)
    })

  }, []);

  const addVehicle = () => {
    navigation.navigate('AddVehicle')
  }

  return (
    <>
      <Text>Your Vehicles</Text>
      {vehicles && vehicles.map((vehicle, index) => {
        let description = 'vehicle number: '+vehicle.vehicle_number+' fuel type: '+vehicle.fuel_type
        return <>
        <List.Item
        key={index}
  style={[{backgroundColor: 'powderblue'}]}
    title={vehicle.id}
    description={description}
    left={props => <List.Icon {...props} icon="car" />}
  />
  <Divider />
  </>
      })}
<Button 
icon="plus" 
mode="contained" 
onPress={() => addVehicle()}>
    Add Vehicle
  </Button>
    </>
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
