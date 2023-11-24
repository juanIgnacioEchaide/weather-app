import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TodayForecastScreen} from '../screens'; // Corrected import path
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="TodayForecastScreen">
      <Stack.Screen
        name="TodayForecastScreen"
        component={TodayForecastScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
