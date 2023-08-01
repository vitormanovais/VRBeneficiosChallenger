import React from 'react';
import {Formik, FormikProps} from 'formik';
import InputField from '../../../../components/InputField';
import {CardProps, initialValues} from './types';
import Button from '../../../../components/Button';
import Header from '../../../../components/Header';
import {
  StyledButtonContainer,
  StyledContainer,
  StyledDualInputContainer,
  StyledDualInputItem,
  StyledInputContainer,
} from './CardSignUpStyles';
import Background from '../../../../components/Backgound';
import useCardsAPI from '../../../hooks/useCreditCardsAPI';
import {useNavigation} from '@react-navigation/native';
import {addCreditCard} from '../../../../contexts/redux/portfolio/actions';
import {useDispatch} from 'react-redux';

const CardSignUp: React.FC = () => {
  const {error, registerCreditCard} = useCardsAPI();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleRegister = async (values: CardProps) => {
    const data = await registerCreditCard(values);
    if (data) {
      dispatch(addCreditCard(data));
      navigation.navigate('Complete', {
        card: data,
      });
    } else {
      console.log('tratar modal erro', error);
    }
  };

  const validate = (values: CardProps) => {
    const errors: Partial<CardProps> = {};

    if (!values.number) {
      errors.number = 'Invalid number';
    }
    if (!values.name) {
      errors.name = 'Invalid name';
    }
    if (!values.dueDate) {
      errors.dueDate = 'Invalid dueDate';
    }
    if (!values.cvv) {
      errors.cvv = 'Invalid cvv';
    }

    return errors;
  };

  return (
    <Background>
      <>
        <Header text="Wallet Test" />
        <Formik
          initialValues={initialValues}
          onSubmit={handleRegister}
          validate={validate}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
          }: FormikProps<CardProps>) => {
            const isFormValid = Object.keys(values).every(
              key => values[key as keyof CardProps] !== '',
            );

            return (
              <>
                <StyledInputContainer>
                  <InputField
                    label="número do cartão"
                    mask="[0000] [0000] [0000] [0000]"
                    keyboardType="number-pad"
                    value={values.number}
                    onChange={handleChange('number')}
                    labelColor="#BBBBBB"
                  />
                </StyledInputContainer>
                <StyledInputContainer>
                  <InputField
                    label="nome do titular do cartão"
                    value={values.name}
                    onChange={handleChange('name')}
                    labelColor="white"
                  />
                </StyledInputContainer>
                <StyledDualInputContainer>
                  <StyledDualInputItem>
                    <InputField
                      label="vencimento"
                      placeholder="00/00"
                      mask="[00]/[00]"
                      keyboardType="number-pad"
                      value={values.dueDate}
                      onChange={(text: string) => {
                        const formattedValue = text
                          .replace(/\D/g, '')
                          .slice(0, 4);
                        let formattedDate = '';
                        if (formattedValue.length > 2) {
                          formattedDate = `${formattedValue.slice(
                            0,
                            2,
                          )}/${formattedValue.slice(2)}`;
                        } else {
                          formattedDate = formattedValue;
                        }
                        handleChange('dueDate')(formattedDate);
                      }}
                      labelColor="white"
                    />
                  </StyledDualInputItem>
                  <StyledDualInputItem>
                    <InputField
                      label="código de segurança"
                      placeholder="***"
                      keyboardType="number-pad"
                      value={values.cvv}
                      onChange={handleChange('cvv')}
                      labelColor="white"
                      maxLength={3}
                    />
                  </StyledDualInputItem>
                </StyledDualInputContainer>
                <StyledButtonContainer>
                  <Button
                    title="Avançar"
                    onPress={handleSubmit}
                    disabled={!isFormValid}
                    type="blue"
                    testId="submitButton"
                  />
                </StyledButtonContainer>
              </>
            );
          }}
        </Formik>
      </>
    </Background>
  );
};

export default CardSignUp;
