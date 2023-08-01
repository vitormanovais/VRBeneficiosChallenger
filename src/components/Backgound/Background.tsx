import {RotatedView, StyledContainer} from './BackgroundStyles';
import React from 'react';

interface BackgroundProps {
  children: JSX.Element;
}

const Background: React.FC<BackgroundProps> = ({children}) => (
  <StyledContainer>
    <RotatedView rotation={-39.93} bottom={'-10%'} left={'30%'} />
    <RotatedView rotation={144.57} bottom={'82%'} left={'-26%'} />
    {children}
  </StyledContainer>
);

export default Background;
