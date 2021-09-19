import { useState } from 'react';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Input } from '../../components/Form/Input';
import { Aside } from '../../components/Form/MessageForm';
import { ScreenSuccess } from '../../components/screen-success/sucess';
import { BackArrow } from '../../components/BackArrow';
import { Button } from '../../components/Button';

import Email from '../../assets/login/Email.svg';

import './styles.scss';
import { ErrorMessage } from '../../components/Form/ErrorMessage';
import { ApiMethods } from '../../services/API';

export function ResetPassword() {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');

  const toggle = () => setModal(!modal);

  async function submitForm(data: { Email: string }) {
    try {
      setMessage('');
      const schema = Yup.object().shape({
        Email: Yup.string()
          .email('Insira um e-mail válido')
          .required('O e-mail é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });
      ApiMethods.ForgotPassword(data.Email);
      toggle();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = error.errors[0];
        setMessage(errorMessages);
      }
    }
  }

  return (
    <>
      {modal ? (
        <ScreenSuccess
          ButtonMessage="Voltar ao login"
          description="Boa, agora é só checar o e-mail que foi enviado para você redefinir a sua senha e aproveitar os estudos."
          redirect="/singin"
          title="Redefinição enviada!"
        />
      ) : (
        <section id="ResetPassword">
          <main>
            <div>
              <BackArrow />
            </div>
            <div>
              <h1>Esqueceu a sua senha?</h1>
              <h4>Relaxe, vamos dar um jeito nisso!</h4>
              <ErrorMessage>{message}</ErrorMessage>
              <Form onSubmit={(event) => submitForm(event)}>
                <Input
                  altImg="email"
                  img={Email}
                  name="Email"
                  label="E-mail"
                  type="email"
                  required
                />
                <Button type="submit">Recuperar a senha</Button>
              </Form>
            </div>
          </main>
          <Aside />
        </section>
      )}
    </>
  );
}
