import { TOGGLE_MODAL } from '~/redux/types/modalType';

const init = {
  isModalVisible: false,
};

const modalReducer = (state = init, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalVisible: !state.isModalVisible,
      };

    default:
      return state;
  }
};

export { modalReducer };
