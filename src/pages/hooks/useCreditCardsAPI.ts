import {useState, useEffect} from 'react';
import axios from 'axios';
import {CardData} from '../../contexts/redux/portfolio/types';

const baseURL = 'http://192.168.15.142:3000/cards';

const useCardsAPI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [creditCardsData, setCreditCards] = useState<CardData[] | null>(null);

  const getCreditCards = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(baseURL);
      setCreditCards(response.data);
      setIsLoading(false);
      return response.data as CardData[];
    } catch (error) {
      setError('Erro ao buscar os cartões. Por favor, tente novamente.');
      setIsLoading(false);
      return [];
    }
  };

  const registerCreditCard = async (cardData: CardData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(baseURL, cardData);
      setCreditCards(prevData =>
        prevData ? [...prevData, response.data] : [response.data],
      );
    } catch (error) {
      setError('Erro ao enviar o cartão. Por favor, tente novamente.');
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getCreditCards();
  }, []);

  return {isLoading, error, creditCardsData, registerCreditCard};
};

export default useCardsAPI;
