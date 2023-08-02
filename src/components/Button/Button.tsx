import {TouchableOpacity} from 'react-native';
import {StyledContainer, StyledText} from './ButtonStyles';

interface HeaderProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
  testId?: string;
  type?: color;
}

type color = 'green' | 'blue' | 'white';

const getColor = (type: color) => {
  switch (type) {
    case 'blue':
      return {color: '#FFFFFF', backgroundColor: '#12C2E9'};
    case 'green':
      return {color: '#142995', backgroundColor: '#A5FF32'};
    case 'white':
      return {color: '#000', backgroundColor: '#FFFFFF'};
  }
};

const Button: React.FC<HeaderProps> = ({
  title,
  disabled = false,
  onPress,
  testId,
  type,
}) => {
  const {backgroundColor, color} = getColor(type ?? 'white');
  return (
    <StyledContainer
      disabled={disabled}
      onPress={onPress}
      testID={testId}
      backgroundColor={backgroundColor}>
      <StyledText color={disabled ? '#BBBBBB' : color}>{title}</StyledText>
    </StyledContainer>
  );
};

export default Button;
