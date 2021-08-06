import { useState } from "react";
import { useHistory } from "react-router";

import Email from "../../assets/login/email.svg";
import Key from "../../assets/login/key.svg";
import Facebook from "../../assets/login/facebook.svg";
import Google from "../../assets/login/google.svg";

import { Input } from "../../components/Input";
import { Aside } from "../../components/MessageForm";
import { BackArrow } from "../../components/BackArrow";
import { ErrorMessage } from "../../components/ErrorMessage";

import "./styles.scss";
import { API } from "../../APi";

export function SingIn() {
  const history = useHistory();
  const [emailOrCPF, setEmailOrCPF] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");

  async function Login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await API.SingIn({ email: emailOrCPF, password });
    } catch(error) {
      setMessageError(error.message)
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

        <form onSubmit={(event) => Login(event)}>
          <Input
            altImg="email"
            img={Email}
            label="Entre com email ou CPF"
            autoComplete="email"
            required
            onChange={(e) => setEmailOrCPF(e.target.value)}
            value={emailOrCPF}
          />

          <Input
            altImg="senha"
            img={Key}
            label="Digite aqui sua senha"
            type="password"
            autoComplete="current-password"
            name="userPassword"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <div id="buttons_container">
            <button type="submit">Entrar</button>
            <button onClick={() => history.push("/reset-password")}>
              Esqueci a senha
            </button>
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
            <button onClick={() => history.push("/singup")}>Cadastre-se</button>
          </h4>
        </div>
      </main>
      <Aside></Aside>
    </div>
  );
}
