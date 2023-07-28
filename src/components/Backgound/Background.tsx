import {RotatedView, StyledContainer} from './BackgroundStyles';
import React, {ReactNode} from 'react';

interface BackgroundProps {
  children: React.FC | ReactNode;
}

const Background: React.FC<BackgroundProps> = ({children}) => (
  <StyledContainer>
    <RotatedView rotation={-39.93} bottom={'-10%'} left={'30%'} />
    {children}
    <RotatedView rotation={144.57} bottom={'82%'} left={'-26%'} />
  </StyledContainer>
);

export default Background;
