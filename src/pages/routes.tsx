// Routes.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './Login';
// import CardSignUpScreen from './CardSignUp';
// import PortfolioScreen from './Portfolio';

export type RootStackParamList = {
  Login: undefined;
  CardSignUp: undefined;
  Portfolio: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="CardSignUp" component={CardSignUpScreen} /> */}
        {/* <Stack.Screen name="Portfolio" component={PortfolioScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
