import {ModalActionTypes, Modal} from './types';

export const setModal = (modal: Modal) => ({
  type: ModalActionTypes.MODAL_SET_MODAL,
  payload: modal,
});

export const hideModal = () => ({
  type: ModalActionTypes.MODAL_HIDE,
});

export const showModal = () => ({
  type: ModalActionTypes.MODAL_SHOW,
});

export default {
  setModal,
  showModal,
  hideModal,
};
