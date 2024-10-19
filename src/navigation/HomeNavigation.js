import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TipCalculator from '../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TipCalculator} /> 
    </Stack.Navigator>
  );
};

export default HomeNavigation;
   