import {StyledContainer, StyledText} from './HeaderStyles';

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({text}) => (
  <StyledContainer>
    <StyledText>{text}</StyledText>
  </StyledContainer>
);

export default Header;
