import {CardData, Portfolio, PortfolioActionTypes} from './types';

export const setCreditCards = (creditCards: CardData[]) => ({
  type: PortfolioActionTypes.PORTFOLIO_SET_CREDIT_CARD,
  payload: creditCards,
});
export const deleteCreditCard = (id: string) => ({
  type: PortfolioActionTypes.PORTFOLIO_DELETE_CREDIT_CARD,
  payload: id,
});
export const addCreditCard = (card: CardData) => ({
  type: PortfolioActionTypes.PORTFOLIO_ADD_CREDIT_CARD,
  payload: card,
});

export default {
  setCreditCards,
  deleteCreditCard,
  addCreditCard,
};
