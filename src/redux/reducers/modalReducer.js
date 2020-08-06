import { TOGGLE_BET_MODAL, TOGGLE_PLAYER_MODAL } from '~/redux/types/modalType';

const init = {
  isModalBetVisible: false,
  isModalPayerVisible: false,
};

const modalReducer = (state = init, action) => {
  switch (action.type) {
    case TOGGLE_BET_MODAL:
      return {
        ...state,
        isModalBetVisible: !state.isModalBetVisible,
      };

    case TOGGLE_PLAYER_MODAL:
      return {
        ...state,
        isModalPayerVisible: !state.isModalPayerVisible,
      };

    default:
      return state;
  }
};

export { modalReducer };
