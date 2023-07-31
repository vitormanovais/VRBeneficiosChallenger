import React from 'react';
import Button from '../../../../components/Button';
import Header from '../../../../components/Header';
import {StyledButtonContainer} from './CompletedStyles';
import Background from '../../../../components/Backgound';
import Card from '../../../../components/Card';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CardData} from '../../../../contexts/redux/portfolio/types';

interface CompletedProps {
  card: CardData;
}

const Completed: React.FC = () => {
  const route = useRoute();
  const {card} = route.params as CompletedProps;
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignUp'}],
    });
    navigation.navigate('Portfolio' as never);
  };

  return (
    <Background>
      <Header text="Wallet Test" />
      <StyledButtonContainer>
        <Card card={card} />
      </StyledButtonContainer>
      <StyledButtonContainer>
        <Button
          title="Avançar"
          onPress={handleNavigate}
          type="blue"
          testId="submitButton"
        />
      </StyledButtonContainer>
    </Background>
  );
};

export default Completed;
