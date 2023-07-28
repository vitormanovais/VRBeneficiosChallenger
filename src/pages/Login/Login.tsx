import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {StyledButtonContainer, StyledButtonsContainer} from './LoginStyles';
import Background from '../../components/Backgound/Background';

const Login: React.FC = () => {
  return (
    <Background>
      <Header text="Wallet Test" />
      <StyledButtonsContainer>
        <StyledButtonContainer>
          <Button
            title="meus cartões"
            onPress={() => console.log('---->myCardButton')}
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
