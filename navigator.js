import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/home.js';
import DetailsScreen from './screen/detail.js';

const AppNavigator = createStackNavigator();

function AppNavigatorStackScreen() {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator