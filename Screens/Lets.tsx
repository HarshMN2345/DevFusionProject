import React from 'react'
import { Image } from 'react-native';
import { View,Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import CustomButton from './components/CustomButton';
import Home from './home_screen';

const Lets = () => {
  return (
   <View style={{flex:1,backgroundColor:"#0A6992",justifyContent:'center',alignItems:"center"}}> 
    <Image source={require('../static/images/download.jpeg')} style={{height:200,width:200}}/>
    <View style={{marginTop:20}}/>
    <TouchableOpacity
       onPress={() => {Home}}
      style={{
        backgroundColor: '#C2444E',
        padding: 10,
        width: 200,
        marginBottom: 30,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        Let's Get Started
      </Text>
    </TouchableOpacity>
   </View>
  )
}

export default Lets;