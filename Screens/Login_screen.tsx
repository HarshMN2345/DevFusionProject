import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import InputField from './components/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from './components/CustomButton';



const Login_screen = () => {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
          <View style={{paddingHorizontal: 25}}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../static/images/Login-bro.png')}
                style={{height: 250, width: 250, marginBottom: 30}}
              />
            </View>
    
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontVariant: ['small-caps'],
                fontSize: 24,
                fontWeight: '500',
                color: '#333',
                marginBottom: 30,
              }}>
             Welcome back, let's get started!
            </Text>
    
            <InputField
              label={'Email ID'}
              icon={
                <MaterialIcons
                name="email"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
              }
              keyboardType="email-address"
            />
    
    <InputField
              label={'Password'}
              icon={
                <Ionicons
                name="key"
                size={20}
                color="#666"
                style={{marginRight: 5}}/>

              }
              inputType="password"
              fieldButtonLabel={"Forgot?"}
              fieldButtonFunction={() => {}}
            />
            
            <CustomButton label={"Login"} onPress={() => {}} />
    
         
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontSize: 14,
                  color: '#666',
                }}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 14,
                    color: '#AD40AF',
                    marginLeft: 5,
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
      );
    };
    

export default Login_screen