import {useState} from 'react';
import axios from 'axios';
import {CardData} from './types';

const baseURL = 'http://192.168.0.113:3000/cards';

const useCardsAPI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<CardData[] | null>(null);

  const getCreditCards = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(baseURL);
      setData(response.data);
    } catch (error) {
      setError('Erro ao buscar os cartões. Por favor, tente novamente.');
    }

    setIsLoading(false);
  };

  const registerCreditCard = async (cardData: CardData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(baseURL, cardData);
      setData(prevData =>
        prevData ? [...prevData, response.data] : [response.data],
      );
    } catch (error) {
      setError('Erro ao enviar o cartão. Por favor, tente novamente.');
    }

    setIsLoading(false);
  };

  return {isLoading, error, data, getCreditCards, registerCreditCard};
};

export default useCardsAPI;
