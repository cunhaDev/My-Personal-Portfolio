import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
/* */
import Splash from '../splashScreen';
import Boarding from './pages/onboarding';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SocialNetwork from './pages/SocialNetwork';
/*  */
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
/*  */
const BotttomTabNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: true,
          style: {
            backgroundColor: '#1A012B',
            borderBottomWidth: 1,
            paddingHorizontal: 10,
            borderRadius: 20,
            marginBottom: 8,
          },
        }}>
        <Tab.Screen
          name="SocialNetwork"
          component={SocialNetwork}
          options={{
            tabBarLabel: 'SocialNetwork',
            tabBarIcon: ({color}) => (
              <Icon2 name="network" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Projects"
          component={Projects}
          options={{
            tabBarLabel: 'Projects',
            tabBarIcon: ({color}) => (
              <Icon name="folder" color={color} size={22} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Boarding" component={Boarding} />
        <Stack.Screen name="Home" component={BotttomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
