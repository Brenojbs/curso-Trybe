import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getByEmail, loginUser } from '../../fetchs';
import * as S from './styles';

const twoSeconds = 2000;

const emailId = 'email';
const passwordId = 'password';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const validateEmail = () => {
      const emailVerification = /\S+@\S+\.\S+/;
      return emailVerification.test(email);
    };
    const validatePassword = () => {
      const minPasswordLength = 6;
      return password.length >= minPasswordLength;
    };

    if (validateEmail() && validatePassword()) {
      setDisableButton(false);
    } else setDisableButton(true);
  }, [email, password]);

  const redirectUserByRole = (role) => {
    const page = {
      customer: '/customer/products',
      seller: '/seller/orders',
      administrator: '/admin/manage',
    };
    return history.push(page[role]);
  };

  const isLogged = localStorage.getItem('user');
  if (isLogged) {
    const user = JSON.parse(isLogged);
    redirectUserByRole(user.role);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error: message, token } = await loginUser({ email, password });

    const { name, role } = await getByEmail(email);

    const userInfo = { name, email, role };

    const user = { ...userInfo, token };

    if (token) {
      localStorage.setItem('user', JSON.stringify(user));
      // redirect user by role
      redirectUserByRole(role);
    } else {
      setError(message);
      setTimeout(() => setError(''), twoSeconds);
    }
  };

  return (
    <S.Body>
      <S.Form onSubmit={ handleSubmit }>
        <S.Label htmlFor={ emailId }>
          Email
          <S.Input
            type="email"
            name="email"
            id={ emailId }
            value={ email }
            placeholder="Alguem@gmail.com"
            data-testid="common_login__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </S.Label>
        <S.Label htmlFor={ passwordId }>
          Password
          <S.Input
            type="password"
            name="password"
            placeholder="******"
            id={ passwordId }
            value={ password }
            data-testid="common_login__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </S.Label>
        <S.Button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ disableButton }
        >
          Login
        </S.Button>

        <S.Button
          type="button"
          onClick={ () => history.push('/register') }
          data-testid="common_login__button-register"
        >
          Cadastrar
        </S.Button>

        <S.ErrorMessage
          data-testid="common_login__element-invalid-email"
          className={ error !== '' ? 'error' : '' }
        >
          {error}
        </S.ErrorMessage>
      </S.Form>

    </S.Body>
  );
}
