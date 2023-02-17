import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';

export default function AddVehicleScreen() {


    const [number, setNumber] = React.useState("");
    const [chassis_number, setChassis_number] = React.useState("");
    const [fuel, setFuel] = React.useState("");
    const [customer, setCustomer] = React.useState("");

    useEffect(() => {

        
    
      }, []);

  return (
    <View style={style.container}>
      <Text>Add Vehicle</Text>

      <TextInput
      label="Vehicle Number"
      value={number}
      onChangeText={text => setNumber(text)}
    />

<TextInput
      label="Chassis Number"
      value={chassis_number}
      onChangeText={text => setChassis_number(text)}
    />

<Menu 
visible={visible} 
onDismiss={closeMenu}
anchor={
<Button onPress={openMenu}>Show menu</Button>}>
<Menu.Item onPress={() => {}} title="Item 1" />
<Menu.Item onPress={() => {}} title="Item 2" />
<Divider />
<Menu.Item onPress={() => {}} title="Item 3" />
</Menu>


<Menu 
visible={visible} 
onDismiss={closeMenu}
anchor={
<Button onPress={openMenu}>Show Fuel Type</Button>}>
<Menu.Item onPress={() => setFuel('petrol')} title="Petrol" />
<Menu.Item onPress={() => setFuel('diesel')} title="Diesel" />
</Menu>


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
