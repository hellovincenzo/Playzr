import { GET_BET } from '~/redux/types/getBetType';

const init = {
  bets: [],
};

const betReducer = (state = init, action) => {
  switch (action.type) {
    case GET_BET:
      return {
        ...state,
        bets: action.bets.data,
      };

    default:
      return state;
  }
};

export { betReducer };
