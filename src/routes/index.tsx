import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '../screens/Dashboard';

export default function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  )
}