import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createCustomer } from '../../fetchs';
import * as S from './styles';

const twoSeconds = 2000;
const nameId = 'name';
const emailId = 'email';
const passwordId = 'password';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const validateName = () => {
      const minNameLength = 12;
      return name.length >= minNameLength;
    };
    const validateEmail = () => {
      // fonte do regex: https://stackoverflow.com/questions/50330109/simple-regex-pattern-for-email/50343015
      const emailRegex = /^[^@]+@[^@]+\.[^@]+$/i;
      return emailRegex.test(email);
    };
    const validatePassword = () => {
      const minPasswordLength = 6;
      return password.length >= minPasswordLength;
    };

    if (validateEmail() && validateName() && validatePassword()) {
      setDisableButton(false);
    } else setDisableButton(true);
  }, [name, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error: message, token } = await createCustomer({ name, email, password });

    const user = { name, email, role: 'customer', token };

    if (token) {
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/customer/products');
    } else {
      console.error(message);
      setError(message);
      setTimeout(() => setError(''), twoSeconds);
    }
  };

  return (
    <S.Body>
      <S.Form onSubmit={ handleSubmit }>
        <S.Label htmlFor={ nameId }>
          Name
          <S.Input
            type="text"
            name="name"
            id={ nameId }
            value={ name }
            data-testid="common_register__input-name"
            onChange={ ({ target }) => setName(target.value) }
          />
        </S.Label>
        <S.Label htmlFor={ emailId }>
          Email
          <S.Input
            type="email"
            name="email"
            id="email"
            value={ email }
            data-testid="common_register__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </S.Label>
        <S.Label htmlFor={ passwordId }>
          Password
          <S.Input
            type="password"
            name="password"
            id={ passwordId }
            value={ password }
            data-testid="common_register__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </S.Label>
        <S.Button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ disableButton }
        >
          Cadastrar
        </S.Button>

        <S.ErrorMessage
          data-testid="common_register__element-invalid_register"
          className={ error !== '' ? 'error' : '' }
        >
          {error}
        </S.ErrorMessage>
      </S.Form>
    </S.Body>
  );
}
