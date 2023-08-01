import React from 'react';
import {
  StyledCardsContainer,
  StyledContainer,
  StyledHeader,
  StyledHeaderContainer,
} from './PortfolioStyles';
import Background from '../../components/Backgound/Background';
import Card from '../../components/Card';
import {ReduxType} from '../../contexts/redux/type';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {useHeaderHeight} from '@react-navigation/elements';

const Portfolio: React.FC = () => {
  const {creditCards} = useSelector((state: ReduxType) => state.portfolio);
  const headerHeight = useHeaderHeight();

  return (
    <Background>
      <StyledContainer>
        <StyledHeaderContainer headerHeight={headerHeight}>
          <StyledHeader>Meus cartões</StyledHeader>
        </StyledHeaderContainer>

        <StyledCardsContainer>
          {creditCards && (
            <FlatList
              data={creditCards}
              renderItem={({item}) => <Card card={item} />}
              keyExtractor={(item, key) => `${item.id}`}
            />
          )}
        </StyledCardsContainer>
      </StyledContainer>
    </Background>
  );
};

export default Portfolio;
