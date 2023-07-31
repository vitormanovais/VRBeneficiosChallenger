import React, {useEffect} from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {StyledButtonContainer, StyledButtonsContainer} from './LoginStyles';
import Background from '../../components/Backgound/Background';
import {useNavigation} from '@react-navigation/native';
import useCardsAPI from '../hooks/useCreditCardsAPI';
import {useDispatch, useSelector} from 'react-redux';
import {ReduxType} from '../../contexts/redux/type';

import portfolioActions from '../../contexts/redux/portfolio/actions';

const Login: React.FC = () => {
  const {creditCards} = useSelector((state: ReduxType) => state.portfolio);
  const {creditCardsData} = useCardsAPI();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (creditCardsData) {
      dispatch(portfolioActions.setCreditCards(creditCardsData));
    }
  }, [creditCardsData]);

  const handleNavigate = (target: string) => {
    navigation.navigate(target as never);
  };

  return (
    <Background>
      <Header text="Wallet Test" />
      <StyledButtonsContainer>
        <StyledButtonContainer>
          <Button
            title="meus cartões"
            onPress={() => handleNavigate('Portfolio')}
            testId="myCardButton"
            type={'blue'}
            disabled={creditCards.length <= 0}
          />
        </StyledButtonContainer>
        <StyledButtonContainer>
          <Button
            title="cadastrar cartão"
            onPress={() => handleNavigate('CardSignUp')}
            testId="addCardButton"
            type={'green'}
          />
        </StyledButtonContainer>
      </StyledButtonsContainer>
    </Background>
  );
};

export default Login;
