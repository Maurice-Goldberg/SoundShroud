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
  debugger
  return {
    type: OPEN_MODAL,
    modal: modalType
  };
};