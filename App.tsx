import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import HomeScreen from './Screens/home_screen';
import SettingsScreen from './Screens/startup_screen';
import LoginScreen from './Screens/Login_screen'; // Updated component name to follow conventions
import Lets from './Screens/Lets';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Home') {
              iconName = focused
                ? require('./static/images/home.png')
                : require('./static/images/home-outline.png');
            } else if (route.name === 'Maps') {
              iconName = focused
                ? require('./static/images/maps.png')
                : require('./static/images/maps-outline.png');
            } else if (route.name === 'Profile') {
              iconName = focused
                ? require('./static/images/profile.png')
                : require('./static/images/profile-outline.png');
            }
            else if (route.name === 'Lets') {
              iconName = focused
                ? require('./static/images/profile.png')
                : require('./static/images/profile-outline.png');
            }
            
            return (
              <Image
                source={iconName}
                style={{ height: 20, width: 20 }}
              />
            );
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#ffffff',
            height: 50,
            paddingBottom: 5,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Maps" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={LoginScreen} />
        <Tab.Screen name="Lets" component={Lets} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
