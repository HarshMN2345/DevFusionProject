import React from 'react';
import {Text, View} from 'react-native';

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color:"red"}}>Home Screen</Text>
      <View style={{borderColor:"green"}}>
        <Text style={{color:"blue",fontSize:12}}>hello namste vhalo kaam ki baat mein </Text>
      </View>
    </View>
  );
};

export default Home;