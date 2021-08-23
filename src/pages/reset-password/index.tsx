import { useState } from 'react';

import { Input } from '../../components/Form/Input';
import { Aside } from '../../components/Form/MessageForm';
import { ScreenSuccess } from '../../components/screen-success/sucess';
import { BackArrow } from '../../components/BackArrow';
import { Button } from '../../components/Button';

import Email from '../../assets/login/Email.svg';

import './styles.scss';

export function ResetPassword() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toggle();
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

              <form onSubmit={(e) => submitForm(e)}>
                <Input
                  altImg="email"
                  img={Email}
                  name="Email"
                  label="E-mail"
                  type="email"
                  required
                />
                <Button type="submit">Recuperar a senha</Button>
              </form>
            </div>
          </main>
          <Aside />
        </section>
      )}
    </>
  );
}
