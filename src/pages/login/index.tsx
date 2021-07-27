import { useHistory } from "react-router";

import Back from "../../assets/login/back-arrow.svg";
import Email from "../../assets/login/email.svg";
import Key from "../../assets/login/key.svg";
import Facebook from "../../assets/login/facebook.svg";
import Google from "../../assets/login/google.svg";

import "./styles.scss";

export function Login() {
  const history = useHistory();

  function focusInput(num: number) {
    const InsputAll = document.querySelectorAll("input");
    InsputAll[num].focus();
  }

  return (
    <div id="Login">
      <main>
        <button onClick={() => history.goBack()}>
          <img src={Back} alt="voltar" />
        </button>

        <div className="title">
          <h1>Login</h1>
          <h3>Preencha os campos abaixo para entrar.</h3>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="InputContainer" onClick={() => focusInput(0)}>
            <img src={Email} alt="email" />
            <div>
              <input required type="text" id="email" />
              <label>Entre com email ou CPF</label>
            </div>
          </div>

          <div className="InputContainer" onClick={() => focusInput(1)}>
            <img src={Key} alt="senha" />

            <div>
              <input required type="password" id="password" />
              <label>Digite aqui sua senha</label>
            </div>
          </div>

          <div id="buttons_container">
            <button type="submit">Entrar</button>
            <button>Esqueci a senha</button>
          </div>
        </form>

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
            <button onClick={()=>history.push("/singup")}>Cadastre-se</button>
          </h4>
        </div>
      </main>

      <aside></aside>
    </div>
  );
}
