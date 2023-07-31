// Routes.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Login';
import PortfolioScreen from '../Portfolio';
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

const CustonHeader: React.FC<CustonHeaderProps> = ({
  text,
  custonRightButton,
}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const handlerNavigation = (target: string) => {
    navigation.navigate(target as never);
  };

  return (
    <>
      <StyledContainer>
        <StyledBackButton onPress={goBack}>
          <IconSvg name="arrowBack" width={21} height={21} color="#12C2E9" />
        </StyledBackButton>
        <StyledText>{text}</StyledText>
        <StyledBackButton
          onPress={() =>
            custonRightButton
              ? handlerNavigation(custonRightButton.action)
              : () => false
          }>
          {custonRightButton && (
            <IconSvg
              name={custonRightButton.icon}
              width={21}
              height={21}
              color="#12C2E9"
            />
          )}
        </StyledBackButton>
      </StyledContainer>
    </>
  );
};

const SignUpSteps = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <CustonHeader text="cadastro" />,
        headerTransparent: true,
      }}>
      <Tab.Screen name="SignUp" component={CardSignUpScreen} />
      <Tab.Screen name="Complete" component={CompletedScreen} />
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
        <Stack.Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{
            header: () => (
              <CustonHeader
                text="Wallet Test"
                custonRightButton={{
                  action: 'CardSignUp',
                  icon: 'more',
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
