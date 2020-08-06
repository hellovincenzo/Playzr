import { GET_PLAYER, CLEAR_PLAYER } from '~/redux/types/playersType';

const init = {
  players: {},
};

const playersReducer = (state = init, action) => {
  switch (action.type) {
    case GET_PLAYER:
      return {
        ...state,
        players: action.players.data,
      };

    case CLEAR_PLAYER:
      return {
        ...state,
        players: {},
      };

    default:
      return state;
  }
};

export { playersReducer };
