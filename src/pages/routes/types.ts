import {iconsName} from '../../components/IconSvg/types';
import {CardData} from '../../contexts/redux/portfolio/types';

export type RootStackParamList = {
  Login: undefined;
  CardSignUp: undefined;
  Portfolio: undefined;
};

export type SignUpParamList = {
  SignUp: undefined;
  Complete: {card: CardData};
};

export interface CustonHeaderProps {
  text: string;
  textColor?: string;
  custonRightButton?: customButton;
  backgroundColor?: string;
}

export interface customButton {
  action: string;
  icon: iconsName;
}
