import { useState } from 'react';
import { useHistory } from 'react-router';

import { Form } from '@unform/web';
import { API } from '../../services/API';
import { SingInProps } from '../../services/API/@types';

import Email from '../../assets/login/Email.svg';
import Key from '../../assets/login/Key.svg';
import Facebook from '../../assets/login/Facebook.svg';
import Google from '../../assets/login/Google.svg';

import { Input } from '../../components/Form/Input';
import { Aside } from '../../components/Form/MessageForm';
import { BackArrow } from '../../components/BackArrow';
import { ErrorMessage } from '../../components/Form/ErrorMessage';

import './styles.scss';

export function SingIn() {
  const history = useHistory();
  const [messageError, setMessageError] = useState('');

  async function handleSubmit(event: SingInProps) {
    try {
      await API.SingIn(event);
      setMessageError('Logado');
      return;
    } catch (error) {
      setMessageError(error.message);
    }
  }

  return (
    <div id="Login">
      <main>
        <BackArrow />

        <div className="title">
          <h1>Login</h1>
          <h3>Preencha os campos abaixo para entrar.</h3>
        </div>
        <ErrorMessage>{messageError}</ErrorMessage>

        <Form onSubmit={(event) => handleSubmit(event)}>
          <Input
            altImg="email"
            img={Email}
            name="email"
            label="Entre com email ou CPF"
            autoComplete="email"
            required
          />

          <Input
            altImg="senha"
            img={Key}
            label="Digite aqui sua senha"
            type="password"
            autoComplete="current-password"
            name="password"
            required
          />

          <div id="buttons_container">
            <button type="submit">Entrar</button>
            <button
              type="button"
              onClick={() => history.push('/reset-password')}
            >
              Esqueci a senha
            </button>
          </div>
        </Form>

        <div>
          <h3>Ou prossiga com estas redes sociais</h3>
        </div>

        <div className="accounts">
          <a href="#a">
            <img src={Google} alt="google" />
          </a>

          <a href="#a">
            <img src={Facebook} alt="facebook" />
          </a>
        </div>

        <div className="SignUp">
          <h4>
            Ainda não possui conta?
            <button type="button" onClick={() => history.push('/singup')}>
              Cadastre-se
            </button>
          </h4>
        </div>
      </main>
      <Aside />
    </div>
  );
}
