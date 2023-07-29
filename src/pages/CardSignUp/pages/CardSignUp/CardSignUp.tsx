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
import useCardsAPI from '../../hooks/useCreditCardsAPI';
import {useNavigation} from '@react-navigation/native';

const CardSignUp: React.FC = () => {
  const {registerCreditCard} = useCardsAPI();
  const navigation = useNavigation();

  const handleLogin = (values: CardProps) => {
    registerCreditCard(values);
    navigation.navigate('Complete', {
      card: values,
    });
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
      <Header text="Wallet Test" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validate={validate}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
        }: FormikProps<CardProps>) => {
          console.log('errors', errors);
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
    </Background>
  );
};

export default CardSignUp;
