import React, { Component } from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (

    <View style={{flex:1}}>

    <View style={{
      flex: 1,
      backgroundColor: 'red'
    }}>

<View style={{
  flex:1,
  flexDirection: 'row',
  backgroundColor: '#808080',
  margin: 15,
  justifyContent: 'space-around',
  alignItems: 'center',
  borderRadius: 10
  }}>

<View style={{backgroundColor: '#FEA500', width: 100, height: 100, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
  <Text style={{ fontSize: 15, fontWeight: 'bold'}}>Orange Circle</Text>
  </View>

<View style={{ backgroundColor: '#FFFC0E', width: 100, height: 50, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
  <Text>Yellow Box</Text>
  </View>

</View>

      </View>

      <View style={{
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#FFC0CA'
    }}>

<View style={{ backgroundColor: 'black', width: 250, height: 450, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
  <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white'}}>Black Box</Text>
  </View>

  <View style={{ backgroundColor: '#A42A29', width: 50, height: 450, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
  <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', transform: [{ rotate: '270deg'}]}}>Brown Box</Text>
  </View>

      </View>

    </View>


  );
}

export default App;
