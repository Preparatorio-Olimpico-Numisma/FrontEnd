import React, { useState } from "react";

import {
  FieldsProps,
  useForm,
  validatePassword,
  validate_cpf,
} from "../../hooks/useForm";

import { BackArrow } from "../../components/BackArrow";
import { Button } from "../../components/Button";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Input } from "../../components/Input";
import { Aside } from "../../components/MessageForm";
import { ScreenSuccess } from "../../components/screen-success/sucess";

import Back from "../../assets/login/back-arrow.svg";

import { API } from "../../APi";

import "./styles.scss";

export function SingUp() {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalForm, setModalForm] = useState(false);
  const [message, setMessage] = useState("");

  const toggleModalSuccess = () => setModalSuccess(!modalSuccess);
  const toggleModalForm = () => setModalForm(!modalForm);

  const form = useForm({
    initialValues: {
      userEmail: "",
      userPassword: "",
      Cpf: "",
      Telephone: "",
      Address: "",
      Description: "",
      UF: "",
      City: "",
      Name: "",
      Family_name: "",
    },

    validate(values: FieldsProps) {
      const errors = {
        userEmail: "",
        userPassword: "",
      };
      if (values.userEmail.length > 0 && !values.userEmail.includes("@"))
        errors.userEmail = "Por favor, insira um email valido.";
      if (values.userPassword && values.userPassword.length > 0)
        errors.userPassword = validatePassword(values.userPassword);

      const arr = [
        values.userEmail,
        values.userPassword,
        values.Cpf,
        values.Telephone,
        values.Address,
        values.Description,
        values.UF,
        values.City,
        values.Name,
        values.Family_name,
      ];

      setMessage("");
      arr.forEach((e) => {
        const str = String(e);
        if (str.length > 0 && str.trim().length < 1) {
          setMessage("Apenas espaços não é permitido");
        }
      });

      if (values.Cpf) {
        if (!Number(values.Cpf)) setMessage("É permitido apenas números");
        const CPF = values.Cpf.trim();
        const arr = CPF.match(/[0-9]/g);
        values.Cpf = "";
        arr?.forEach((e) => (values.Cpf += e));
        var count = 1;
        for (let i = 1; i < 11; i++) {
          if (values.Cpf[i - 1] === values.Cpf[i]) count++;
        }
        if (!validate_cpf(values.Cpf) || count === 11)
          setMessage("Insira um CPF válido");
      }

      return errors;
    },
  });

  async function formSubimit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!!form.errors.userEmail) return;
    if (!!form.errors.userPassword) return;
    if (message !== "") return;
    try {
      await API.SingUp(form.values);
      toggleModalSuccess();
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <>
      {modalSuccess ? (
        <ScreenSuccess
          ButtonMessage="Fazer login"
          description="Agora você faz parte da plataforma do Numisma. Tenha uma ótima experiência."
          redirect="/singin"
          title="Cadastro concluído"
        />
      ) : (
        <section id="SingUp">
          <main>
            {modalForm ? (
              <button onClick={toggleModalForm} className="backButton">
                <img src={Back} alt="voltar" />
              </button>
            ) : (
              <BackArrow />
            )}

            <div>
              <h1>Cadastro</h1>
              <h4>Preencha os dados abaixo para começar.</h4>
            </div>
            <ErrorMessage>{form.errors.userEmail}</ErrorMessage>
            <ErrorMessage>{form.errors.userPassword}</ErrorMessage>
            <ErrorMessage>{message}</ErrorMessage>
            <form onSubmit={(e) => formSubimit(e)}>
              <div className={!modalForm ? "active" : ""}>
                <Input
                  label="UF"
                  type="text"
                  name="UF"
                  autoComplete="address-level1"
                  required
                  onChange={form.handleChange}
                  value={form.values.UF}
                />

                <Input
                  label="Cidade"
                  type="text"
                  name="City"
                  autoComplete="address-level2"
                  required
                  onChange={form.handleChange}
                  value={form.values.City}
                />

                <Input
                  label="Nome"
                  type="text"
                  name="Name"
                  autoComplete="given-name"
                  required
                  onChange={form.handleChange}
                  value={form.values.Name}
                />

                <Input
                  label="Sobrenome"
                  type="text"
                  name="Family_name"
                  autoComplete="family-name"
                  required
                  onChange={form.handleChange}
                  value={form.values.Family_name}
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
              </div>

              <div className={modalForm ? "active" : ""}>
                <Input
                  label="CPF"
                  type="text"
                  name="Cpf"
                  autoComplete="CPF"
                  required
                  onChange={form.handleChange}
                  value={form.values.Cpf}
                  maxLength={11}
                />
                <Input
                  label="Telephone"
                  type="text"
                  name="Telephone"
                  autoComplete="tel"
                  required
                  onChange={form.handleChange}
                  value={form.values.Telephone}
                />
                <Input
                  label="address"
                  type="text"
                  name="Address"
                  autoComplete="address"
                  required
                />
                <Input
                  label="description"
                  type="text"
                  name="Description"
                  autoComplete="description"
                  required
                  onChange={form.handleChange}
                  value={form.values.Description}
                />
                <Input
                  label="avatar"
                  type="file"
                  name="Avatar"
                  isFile
                  accept="image/*"
                  multiple={false}
                  required
                />
              </div>

              {modalForm ? (
                <Button type="submit">Concluir cadastro</Button>
              ) : (
                <Button type="button" onClick={toggleModalForm}>
                  Próxima etapa
                </Button>
              )}
            </form>
          </main>
          <Aside />
        </section>
      )}
    </>
  );
}
