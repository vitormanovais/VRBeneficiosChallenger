import {SvgXml} from 'react-native-svg';
import {iconsName} from './types';
import {getSvg} from './utils';

interface HeaderProps {
  name: iconsName;
  width?: number;
  height?: number;
  color?: string;
}

const IconSvg: React.FC<HeaderProps> = ({name, width, height, color}) => {
  const xml = getSvg(name);
  return <SvgXml xml={xml} width={width} height={height} fill={color} />;
};

export default IconSvg;
