import React, {useEffect} from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {StyledButtonsContainer} from './PortfolioStyles';
import Background from '../../components/Backgound/Background';
import {useNavigation} from '@react-navigation/native';
import Card from '../../components/Card';
import {ReduxType} from '../../contexts/redux/type';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {CardData} from '../../contexts/redux/portfolio/types';

const Portfolio: React.FC = () => {
  const navigation = useNavigation();

  const {creditCards} = useSelector((state: ReduxType) => state.portfolio);

  const handleNavigateToCardSignUp = () => {
    navigation.navigate('CardSignUp');
  };

  return (
    <Background>
      <Header text="Wallet Test" />
      <StyledButtonsContainer>
        {creditCards && (
          <FlatList
            data={creditCards}
            renderItem={({item}) => <Card card={item} />}
            keyExtractor={(item, key) => `${item.id}`}
          />
        )}
      </StyledButtonsContainer>
    </Background>
  );
};

export default Portfolio;
