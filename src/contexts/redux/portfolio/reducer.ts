import {Portfolio, PortfolioActionTypes} from './types';

const initialState: Portfolio = {
  creditCards: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PortfolioActionTypes.PORTFOLIO_SET_CREDIT_CARD:
      return {...state, creditCards: action.payload};
    case PortfolioActionTypes.PORTFOLIO_DELETE_CREDIT_CARD:
      const cardIndex = state.creditCards.findIndex(
        card => card.id === action.payload,
      );
      const updatedCards = [...state.creditCards];
      if (cardIndex !== -1) {
        updatedCards.splice(cardIndex, 1);
      }
      return {...state, creditCards: updatedCards};
    case PortfolioActionTypes.PORTFOLIO_ADD_CREDIT_CARD:
      return {...state, creditCards: [...state.creditCards, action.payload]};
    default:
      return state;
  }
};

export default reducer;
