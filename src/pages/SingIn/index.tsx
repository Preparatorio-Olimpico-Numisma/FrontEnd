import { useHistory } from "react-router";

import Email from "../../assets/login/email.svg";
import Key from "../../assets/login/key.svg";
import Facebook from "../../assets/login/facebook.svg";
import Google from "../../assets/login/google.svg";

import { Input } from "../../components/Input";
import { Aside } from "../../components/MessageForm";
import { BackArrow } from "../../components/BackArrow";
import { ErrorMessage } from "../../components/ErrorMessage";

import { useForm, validatePassword, FieldsProps } from "../../hooks/useForm";

import "./styles.scss";

export function SingIn() {
  const history = useHistory();

  const form = useForm({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },

    validate(values: FieldsProps) {
      const errors = {
        userEmail: "",
        userPassword: "",
      };

      try {
        const { userEmail, userPassword } = values;
        if (userEmail.length > 0 && !userEmail.includes("@"))
          errors.userEmail = "Por favor, insira um email valido.";
        if (userPassword.length > 0) validatePassword(userPassword);
      } catch (error) {
        errors.userPassword = error.message;
      }

      return errors;
    },
  });

  return (
    <div id="Login">
      <main>
        <BackArrow />

        <div className="title">
          <h1>Login</h1>
          <h3>Preencha os campos abaixo para entrar.</h3>
        </div>
        <ErrorMessage>{form.errors.userEmail}</ErrorMessage>
        <ErrorMessage>{form.errors.userPassword}</ErrorMessage>

        <form onSubmit={(event) => event.preventDefault()}>
          <Input
            altImg="email"
            img={Email}
            label="Entre com email ou CPF"
            type="email"
            autoComplete="email"
            name="userEmail"
            required
            onChange={form.handleChange}
            value={form.values.userEmail}
          />

          <Input
            altImg="senha"
            img={Key}
            label="Digite aqui sua senha"
            type="password"
            autoComplete="current-password"
            name="userPassword"
            required
            onChange={form.handleChange}
            value={form.values.userPassword}
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
