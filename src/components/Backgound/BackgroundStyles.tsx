import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #142995;
`;

export const RotatedView = styled.View<{
  rotation: number;
  bottom: string;
  left: string;
}>`
  width: 97%;
  height: 30%;
  background-color: #eeeeee;
  position: absolute;
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  transform: rotate(${props => props.rotation}deg);
  border-radius: 50px 50px 0px 0px;
  transform-origin: center center;
  align-items: center;
  justify-content: center;
  opacity: 0.2;
`;
