import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {StyledButtonContainer, StyledButtonsContainer} from './LoginStyles';
import Background from '../../components/Backgound/Background';
import {useNavigation} from '@react-navigation/native';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToCardSignUp = () => {
    navigation.navigate('CardSignUp');
  };
  return (
    <Background>
      <Header text="Wallet Test" />
      <StyledButtonsContainer>
        <StyledButtonContainer>
          <Button
            title="meus cartões"
            onPress={handleNavigateToCardSignUp}
            testId="myCardButton"
            type={'blue'}
          />
        </StyledButtonContainer>
        <StyledButtonContainer>
          <Button
            title="cadastrar cartão"
            onPress={() => console.log('---->addCardButton')}
            testId="addCardButton"
            type={'green'}
          />
        </StyledButtonContainer>
      </StyledButtonsContainer>
    </Background>
  );
};

export default Login;
