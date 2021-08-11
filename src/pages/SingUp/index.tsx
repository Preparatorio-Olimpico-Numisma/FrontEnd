/* eslint-disable react/react-in-jsx-scope */
import { useRef, useState } from 'react';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { validatePassword, ValidadeCPF } from '../../hooks/useForm';

import { BackArrow } from '../../components/BackArrow';
import { Button } from '../../components/Button';
import { ErrorMessage } from '../../components/Form/ErrorMessage';
import { Input } from '../../components/Form/Input';
import { Aside } from '../../components/Form/MessageForm';
import { ScreenSuccess } from '../../components/screen-success/sucess';

import { API, SingUpProps } from '../../services/API';

import './styles.scss';

interface handleSubimitProps extends SingUpProps {
  ConfirmPassword: string;
}

export function SingUp(): JSX.Element {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [messages, setMessages] = useState('');
  const formRef = useRef<FormHandles>(null);

  const toggleModalSuccess = (): void => setModalSuccess(!modalSuccess);

  async function handleSubmit(data: handleSubimitProps): Promise<void> {
    try {
      if (!Number(data.cpf)) throw new Error('Insira apenas números');
      const schema = Yup.object().shape({
        first_name: Yup.string()
          .required('O nome é obrigatório')
          .trim('Apenas espaços não é permitido'),
        last_name: Yup.string()
          .required('O sobrenome é obrigatório')
          .trim('Apenas espaços não é permitido'),
        email: Yup.string()
          .required('O email é obrigatório')
          .email('digite um email válidio')
          .trim('Apenas espaços não é permitido'),
        password: Yup.string().required('O password é obrigatório'),
        ConfirmPassword: Yup.string()
          .required('Confirme sua senha')
          .trim('Apenas espaços não é permitido'),
        cpf: Yup.number()
          .required('O cpf é obrigatório')
          .integer('Insira números'),
      });

      await schema.validate(data, { abortEarly: false });

      const message = validatePassword(data.password);
      if (message) throw new Error(message);

      if (data.password !== data.ConfirmPassword) {
        throw new Error('As senhas precisam ser iguais');
      }
      if (!ValidadeCPF(String(data.cpf))) {
        throw new Error('Insira um cpf válido');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { ConfirmPassword, ...rest } = data;

      await API.SingUp(rest);
      toggleModalSuccess();
    } catch (err) {
      if (err instanceof Yup.ValidationError) setMessages(err.errors[0]);
      else setMessages(err.message);
    }
  }

  if (modalSuccess) {
    return (
      <ScreenSuccess
        ButtonMessage="Fazer login"
        description="Agora você faz parte da plataforma do Numisma. Tenha uma ótima experiência."
        redirect="/singin"
        title="Cadastro concluído"
      />
    );
  }

  return (
    <section id="SingUp">
      <main>
        <BackArrow />
        <div>
          <h1>Cadastro</h1>
          <h4>Preencha os dados abaixo para começar.</h4>
        </div>
        <ErrorMessage>{messages}</ErrorMessage>
        <Form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
          <Input
            label="Nome"
            type="text"
            name="first_name"
            autoComplete="given-name"
            required
          />

          <Input
            label="Sobrenome"
            type="text"
            name="last_name"
            autoComplete="family-name"
            required
          />

          <Input
            label="E-mail"
            type="email"
            name="email"
            autoComplete="email"
            required
          />

          <Input
            label="Senha"
            type="password"
            name="password"
            autoComplete="new-password"
            required
          />

          <Input
            label="Confirme sua senha"
            type="password"
            name="ConfirmPassword"
            autoComplete="new-password"
            required
          />

          <Input
            label="Coloque seu cpf"
            type="text"
            name="cpf"
            autoComplete="cpf"
            minLength={11}
            maxLength={11}
            required
          />

          <Button type="submit">Concluir cadastro</Button>
        </Form>
      </main>
      <Aside />
    </section>
  );
}
