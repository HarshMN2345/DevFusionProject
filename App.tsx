import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Screens/home_screen';
import SettingsScreen from './Screens/startup_screen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              if (!focused) {
                return (
                  <Image
                    source={require('./static/images/home-outline.png')}
                    style={{height: 30, width: 30}}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('./static/images/home.png')}
                    style={{height: 30, width: 30}}
                  />
                );
              }
            } else if (route.name === 'Maps') {
              if (!focused) {
                return (
                  <Image
                    source={require('./static/images/home-outline.png')}
                    style={{height: 30, width: 30}}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('./static/images/home.png')}
                    style={{height: 30, width: 30}}
                  />
                );
              }
            }
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#ffffff',
            height: 50,
            paddingBottom: 5,
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Maps" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
