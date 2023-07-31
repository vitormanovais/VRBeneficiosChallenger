import React from 'react';
import Button from '../../../../components/Button';
import Header from '../../../../components/Header';
import {StyledButtonContainer} from './CompletedStyles';
import Background from '../../../../components/Backgound';
import {CardData} from '../../hooks/types';
import Card from '../../../../components/Card';
import {useRoute} from '@react-navigation/native';

interface CompletedProps {
  card: CardData;
}

const Completed: React.FC = () => {
  const route = useRoute();
  const {card} = route.params as CompletedProps;
  return (
    <Background>
      <Header text="Wallet Test" />
      <StyledButtonContainer>
        <Card card={card} />
      </StyledButtonContainer>
      <StyledButtonContainer>
        <Button
          title="Avançar"
          onPress={() => false}
          type="blue"
          testId="submitButton"
        />
      </StyledButtonContainer>
    </Background>
  );
};

export default Completed;
