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
import {useRegisterCardForm} from './useRegisterCardForm';

const CardSignUp: React.FC = () => {
  const {handleRegister, validate} = useRegisterCardForm();
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
            const isFormValid = Object.keys(errors).every(key => {
              return errors[key as keyof CardProps] === '';
            });

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
                    error={values.number && errors.number}
                  />
                </StyledInputContainer>
                <StyledInputContainer>
                  <InputField
                    label="nome do titular do cartão"
                    value={values.name}
                    onChange={handleChange('name')}
                    labelColor="white"
                    error={values.name && errors.name}
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
                      error={values.dueDate && errors.dueDate}
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
                      error={values.cvv && errors.cvv}
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
