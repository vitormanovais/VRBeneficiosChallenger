// Routes.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Login';
import CardSignUpScreen from '../CardSignUp/pages/CardSignUp';
import CompletedScreen from '../CardSignUp/pages/Completed';
import {CustonHeaderProps, RootStackParamList, SignUpParamList} from './types';
import {StyledBackButton, StyledContainer, StyledText} from './routesStyles';
import IconSvg from '../../components/IconSvg';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import PortfolioScreen from './Portfolio';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<SignUpParamList>();

const CustonHeader: React.FC<CustonHeaderProps> = ({text}) => {
  const navigation = useNavigation();

  const handleNavigateToCardSignUp = () => {
    navigation.goBack();
  };
  console.log('GOBACK');
  return (
    <>
      <StyledBackButton onPress={handleNavigateToCardSignUp}>
        <IconSvg name="arrowBack" width={21} height={21} color="#12C2E9" />
      </StyledBackButton>
      <StyledContainer>
        <StyledText>{text}</StyledText>
      </StyledContainer>
    </>
  );
};

const SignUpSteps = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SignUp"
        component={CardSignUpScreen}
        options={{
          header: () => <CustonHeader text="cadastro" />,
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="Complete"
        component={CompletedScreen}
        options={{
          header: () => <CustonHeader text="cadastro1" />,
          headerTransparent: true,
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CardSignUp"
          component={SignUpSteps}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Portfolio" component={SignUpSteps} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
