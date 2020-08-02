import { GET_BET, SELECT_BET } from '~/redux/types/getBetType';

const init = {
  bets: [],
  selectedBet: 2,
};

const betReducer = (state = init, action) => {
  switch (action.type) {
    case GET_BET:
      return {
        ...state,
        bets: action.bets.data.map((bet, i) => ({
          id: i,
          bet,
          isSelected:
            state.selectedBet === bet ? state.selectedBet === bet : false,
        })),
      };

    case SELECT_BET:
      return {
        ...state,
        bets: action.bets.map((bet) => ({
          id: bet.id,
          bet: bet.bet,
          isSelected:
            action.selectedBet === bet.bet
              ? action.selectedBet === bet.bet
              : false,
        })),
        selectedBet: action.selectedBet,
      };

    default:
      return state;
  }
};

export { betReducer };
