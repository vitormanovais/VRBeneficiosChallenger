import React from 'react';
import {ScrollView} from 'react-native';
import {Formik, FormikProps} from 'formik';
import InputField from '../../components/InputField';
import {CardProps, initialValues} from './types';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {
  StyledButtonContainer,
  StyledContainer,
  StyledDualInputContainer,
  StyledDualInputItem,
  StyledInputContainer,
} from './CardSignUpStyles';
import Background from '../../components/Backgound';

const CardSignUp: React.FC = () => {
  const handleLogin = (values: CardProps) => {
    console.log('Login realizado com sucesso!', values);
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
                  placeholder=""
                  value={values.number}
                  onChange={handleChange('number')}
                  labelColor="#BBBBBB"
                />
              </StyledInputContainer>
              <StyledInputContainer>
                <InputField
                  label="nome do titular do cartão"
                  placeholder=""
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
                    maxLength={5}
                  />
                </StyledDualInputItem>
                <StyledDualInputItem>
                  <InputField
                    label="código de segurança"
                    placeholder="***"
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
