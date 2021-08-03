import { useState } from "react";

import { Input } from "../../components/Input";
import { Aside } from "../../components/MessageForm";
import { ScreenSuccess } from "../../components/screen-success/sucess";
import { BackArrow } from "../../components/BackArrow";
import { Button } from "../../components/Button";

import Email from "../../assets/login/email.svg";

import "./styles.scss";

export function ResetPassword() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e);
    toggle();
  }

  return (
    <>
      {modal ? (
        <ScreenSuccess
          ButtonMessage="Voltar ao login"
          description="Boa, agora é só checar o e-mail que foi enviado para você redefinir a sua senha e aproveitar os estudos."
          redirect="/"
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
