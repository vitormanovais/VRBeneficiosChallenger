export interface Modal {
  animationType: 'slide' | 'none' | 'fade';
  visible: boolean;
  component: JSX.Element;
  position: positionType;
}

export type positionType = 'center' | 'footer' | 'top';

export enum ModalActionTypes {
  MODAL_HIDE = 'MODAL_HIDE',
  MODAL_SHOW = 'MODAL_SHOW',
  MODAL_SET_MODAL = 'MODAL_SET_MODAL',
}
