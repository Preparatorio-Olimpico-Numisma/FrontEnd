import { useHistory } from "react-router";

import Email from "../../assets/login/email.svg";
import Key from "../../assets/login/key.svg";
import Facebook from "../../assets/login/facebook.svg";
import Google from "../../assets/login/google.svg";

import { Input } from "../../components/Input";
import { Aside } from "../../components/MessageForm";
import { BackArrow } from "../../components/BackArrow";

import "./styles.scss";

export function SingIn() {
  const history = useHistory();

  return (
    <div id="Login">
      <main>
        <BackArrow/>
        
        <div className="title">
          <h1>Login</h1>
          <h3>Preencha os campos abaixo para entrar.</h3>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            altImg="email"
            img={Email}
            label="Entre com email ou CPF"
            required
            type="email"
            autoComplete="email"
          />

          <Input
            altImg="senha"
            img={Key}
            label="Digite aqui sua senha"
            type="password"
            autoComplete="current-password"
            required
          />

          <div id="buttons_container">
            <button type="submit">Entrar</button>
            <button
              onClick={() => {
                history.push("/reset-password");
              }}
            >
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
