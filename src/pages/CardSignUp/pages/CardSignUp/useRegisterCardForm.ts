import {useState} from 'react';

import useCardsAPI from '../../../hooks/useCreditCardsAPI';
import {useNavigation} from '@react-navigation/native';
import {addCreditCard} from '../../../../contexts/redux/portfolio/actions';
import {useDispatch} from 'react-redux';
import {CardData} from '../../../../contexts/redux/portfolio/types';

export const useRegisterCardForm = () => {
  const {error, registerCreditCard} = useCardsAPI();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [statusModal, setStatusModal] = useState(false);

  const handleRegister = async (values: CardData) => {
    const data = await registerCreditCard(values);
    if (data) {
      dispatch(addCreditCard(data));
      navigation.navigate('Complete', {
        card: data,
      });
    } else {
      setStatusModal(true);
      console.log('tratar modal erro', error);
    }
  };

  const validate = (values: CardData) => {
    const errors: Partial<CardData> = {};

    if (values.number.length < 19) {
      errors.number = 'Numero do cartão inválido';
    }

    const fullName = values.name.trim();
    const nameWords = fullName.split(' ');
    if (nameWords.length < 2) {
      errors.name =
        'Nome está incompleto, por favor insira o nome igual impresso no cartão';
    }

    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(values.dueDate)) {
      errors.dueDate = 'Data de vencimento inválida';
    } else {
      const today = new Date();
      const [month, year] = values.dueDate.split('/');
      const dueDate = new Date(Number(`20${year}`), Number(month));

      if (dueDate < today) {
        errors.dueDate = 'A data de vencimento deve ser futura';
      }
    }

    if (values.cvv.length < 3) {
      errors.cvv = 'Invalid cvv';
    }

    return errors;
  };

  return {
    validate,
    handleRegister,
  };
};
