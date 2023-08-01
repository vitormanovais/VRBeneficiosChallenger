import {CardData} from '../../contexts/redux/portfolio/types';
import {
  InfoContainer,
  InfoContainerData,
  InfoContainerHeader,
  StyledContainer,
  StyledText,
  StyledTextHeader,
} from './CardStyles';

interface CardProps {
  card: CardData;
}

const Card: React.FC<CardProps> = ({card}) => {
  const {number, name, dueDate, type = 'black'} = card;
  const protectNumber = number.replace(' ', '').slice(-4);

  return (
    <StyledContainer type={type}>
      <InfoContainer>
        <InfoContainerHeader>
          <StyledTextHeader type={type}>
            {card.type === 'black' ? 'Black' : 'Green'} Card
          </StyledTextHeader>
        </InfoContainerHeader>
        <InfoContainerData>
          <StyledText type={type}>{name}</StyledText>
          <StyledText type={type}> •••• •••• •••• {protectNumber}</StyledText>
          <StyledText type={type}>Validade {dueDate}</StyledText>
        </InfoContainerData>
      </InfoContainer>
    </StyledContainer>
  );
};

export default Card;
