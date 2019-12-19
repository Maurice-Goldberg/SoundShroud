export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const closeModal = () => {
  debugger
  return {
    type: CLOSE_MODAL,
    modal: null
  };
};

export const openModal = (modalType) => {
  return {
    type: OPEN_MODAL,
    modal: modalType
  };
};