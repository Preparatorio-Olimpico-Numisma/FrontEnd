import { Input } from "../../components/Input";
import { Aside } from "../../components/MessageForm";
import { Button } from "../../components/Button";

import Email from "../../assets/login/email.svg";
import BackButton from "../../assets/login/back-arrow.svg";

import "./styles.scss";
import { useHistory } from "react-router-dom";

export function ResetPassword() {
  const history = useHistory()
  return (
    <section id="ResetPassword">
      <main>
        <div>
          <button onClick = {() => history.goBack()}>
            <img src={BackButton} alt="voltar" />
          </button>
        </div>
        <div>
          <h1>Esqueceu a sua senha?</h1>
          <h4>Relaxe, vamos dar um jeito nisso!</h4>

          <form onSubmit={(e) => e.preventDefault()}>
            <Input altImg="email" img={Email} label="E-mail" type="email" required/>
            <Button type="submit">Recuperar a senha</Button>
          </form>
        </div>

      </main>
      <Aside />
    </section>
  );
}
