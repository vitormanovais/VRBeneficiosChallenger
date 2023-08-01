export interface Portfolio {
  creditCards: CardData[];
}

export interface CardData {
  id?: string;
  number: string;
  cvv: string;
  name: string;
  dueDate: string;
  type?: CardType;
}

export type CardType = 'green' | 'black';

export enum PortfolioActionTypes {
  PORTFOLIO_SET_CREDIT_CARD = 'PORTFOLIO_SET_CREDIT_CARD',
  PORTFOLIO_DELETE_CREDIT_CARD = 'PORTFOLIO_DELETE_CREDIT_CARD',
  PORTFOLIO_ADD_CREDIT_CARD = 'PORTFOLIO_ADD_CREDIT_CARD',
}
