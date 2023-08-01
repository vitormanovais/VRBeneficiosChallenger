import {ModalActionTypes, Modal} from './types';

const initialState: Modal = {
  animationType: 'fade',
  visible: false,
  component: <></>,
  position: 'center',
};
const modalReducer = (state = initialState, action: any): Modal => {
  switch (action.type) {
    case ModalActionTypes.MODAL_SET_MODAL:
      return {
        ...state,
        ...action.payload,
      };
    case ModalActionTypes.MODAL_HIDE:
      return {
        ...state,
        visible: false,
      };
    case ModalActionTypes.MODAL_SHOW:
      return {
        ...state,
        visible: true,
      };
    default:
      return state;
  }
};

export default modalReducer;
