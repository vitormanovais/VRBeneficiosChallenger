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
  const {number, name, dueDate} = card;
  const protectNumber = number.replace(' ', '').slice(-4);

  return (
    <StyledContainer>
      <InfoContainer>
        <InfoContainerHeader>
          <StyledTextHeader>Black Card</StyledTextHeader>
        </InfoContainerHeader>
        <InfoContainerData>
          <StyledText>{name}</StyledText>
          <StyledText> •••• •••• •••• {protectNumber}</StyledText>
          <StyledText>Validade {dueDate}</StyledText>
        </InfoContainerData>
      </InfoContainer>
    </StyledContainer>
  );
};

export default Card;
