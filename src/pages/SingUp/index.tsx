import { useState } from "react";

import { BackArrow } from "../../components/BackArrow";
import { Button } from "../../components/Button";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Input } from "../../components/Input";
import { Aside } from "../../components/MessageForm";
import { ScreenSuccess } from "../../components/screen-success/sucess";

import { FieldsProps, useForm, validatePassword } from "../../hooks/useForm";

import "./styles.scss";

export function SingUp() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
        if (userEmail && userEmail.length > 0 && !userEmail.includes("@"))
          errors.userEmail = "Por favor, insira um email valido.";
        if (userPassword && userPassword.length > 0)
          validatePassword(userPassword);
      } catch (error) {
        errors.userPassword = error.message;
      }

      return errors;
    },
  });

  return (
    <>
      {modal ? (
        <ScreenSuccess
          ButtonMessage="Fazer login"
          description="Agora você faz parte da plataforma do Numisma. Tenha uma ótima experiência."
          redirect="/singin"
          title="Cadastro concluído"
        />
      ) : (
        <section id="SingUp">
          <main>
            <BackArrow />

            <div>
              <h1>Cadastro</h1>
              <h4>Preencha os dados abaixo para começar.</h4>
            </div>
            <ErrorMessage>{form.errors.userEmail}</ErrorMessage>
            <ErrorMessage>{form.errors.userPassword}</ErrorMessage>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if(!!form.errors.userEmail) return
                if(!!form.errors.userPassword) return
                toggle();
              }}
            >
              <Input
                label="UF"
                type="text"
                name="UF"
                autoComplete="address-level1"
                required
              />

              <Input
                label="Cidade"
                type="text"
                name="City"
                autoComplete="address-level2"
                required
              />

              <Input
                label="Nome"
                type="text"
                name="Name"
                autoComplete="given-name"
                required
              />

              <Input
                label="Sobrenome"
                type="text"
                name="family_name"
                autoComplete="family-name"
                required
              />

              <Input
                label="E-mail"
                type="email"
                name="userEmail"
                autoComplete="email"
                required
                onChange={form.handleChange}
                value={form.values.userEmail}
              />

              <Input
                label="Senha"
                type="password"
                name="userPassword"
                autoComplete="new-password"
                required
                onChange={form.handleChange}
                value={form.values.userPassword}
              />
              <Button type="submit">Concluir cadastro</Button>
            </form>
          </main>
          <Aside />
        </section>
      )}
    </>
  );
}
