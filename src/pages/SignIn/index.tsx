import { useState } from 'react';
import { useHistory } from 'react-router';

import { Form } from '@unform/web';

import { SignInProps } from '../../services/API/@types';
import { useAuthContext } from '../../hooks/useAuth';

import Email from '../../assets/login/Email.svg';
import Key from '../../assets/login/Key.svg';
import Facebook from '../../assets/login/Facebook.svg';
import Google from '../../assets/login/Google.svg';

import { Input } from '../../components/Form/Input';
import { Aside } from '../../components/Form/MessageForm';
import { BackArrow } from '../../components/BackArrow';
import { ErrorMessage } from '../../components/Form/ErrorMessage';

import './styles.scss';
import { Load } from '../../components/Load';

export function SignIn() {
  const history = useHistory();
  const context = useAuthContext();
  const [messageError, setMessageError] = useState('');

  async function handleSubmit(event: SignInProps) {
    try {
      await context.SignIn(event.email, event.password);
      setMessageError('Logado');
      return;
    } catch (error: any) {
      setMessageError(error.message);
    }
  }
  if (context.loading) return <Load />;

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
