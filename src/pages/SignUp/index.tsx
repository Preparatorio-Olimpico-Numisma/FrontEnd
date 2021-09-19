import { useRef, useState } from 'react';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import {
  validatePassword,
  ValidadeCPF,
  getMessageErrorsPassoword,
} from '../../hooks/useForm';
import { useAuthContext } from '../../hooks/useAuth';

import { BackArrow } from '../../components/BackArrow';
import { Button } from '../../components/Button';
import { ErrorMessage } from '../../components/Form/ErrorMessage';
import { Input, MaskInput } from '../../components/Form/Input';
import { Aside } from '../../components/Form/MessageForm';
import { ScreenSuccess } from '../../components/screen-success/sucess';

import { SignUpProps } from '../../services/API/@types';

import './styles.scss';

interface handleSubimitProps extends SignUpProps {
  ConfirmPassword: string;
}

export function SignUp() {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [messages, setMessages] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState({
    upperCase: false,
    lowerCase: false,
    number: false,
    specialChar: false,
    length: false,
  });

  const formRef = useRef<FormHandles>(null);
  const context = useAuthContext();

  const toggleModalSuccess = () => setModalSuccess(!modalSuccess);

  function onChangePassord(Password: string) {
    const res = validatePassword(Password);
    setPassword(res);
  }

  async function handleSubmit(data: handleSubimitProps) {
    try {
      const { ConfirmPassword, ...rest } = data;
      const FinalData = rest;
      FinalData.cpf = cpf.replace(/[^\d]+/g, '');

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
        cpf: Yup.number()
          .required('O cpf é obrigatório')
          .integer('O CPF é composto por números apenas.'),
      });

      await schema.validate(FinalData, { abortEarly: false });

      const message = getMessageErrorsPassoword(FinalData.password);
      if (message) throw new Error(message);

      if (FinalData.password !== ConfirmPassword)
        throw new Error('As senhas precisam ser iguais');

      if (Number.isNaN(Number(FinalData.cpf)))
        throw new Error('Insira apenas números');

      if (!ValidadeCPF(String(FinalData.cpf)))
        throw new Error('Insira um cpf válido');

      await context.SignUp(rest);
      toggleModalSuccess();
    } catch (error: any) {
      if (String(error).includes('409')) {
        setMessages('Usuário já cadastrado');
        return;
      }
      if (error instanceof Yup.ValidationError) setMessages(error.errors[0]);
      else setMessages(error.message);
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
    <section id="SignUp">
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
            ContainerClassName="firstChild"
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

          <div
            className={
              isFocus ? 'ContainerPassword focused' : 'ContainerPassword'
            }
          >
            <Input
              label="Senha"
              type="password"
              name="password"
              autoComplete="new-password"
              required
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(e) => onChangePassord(e.currentTarget.value)}
            />
            <div className="verification">
              <p>
                <FontAwesomeIcon
                  icon={password.upperCase ? faCheckCircle : faTimesCircle}
                  color={password.upperCase ? '#7fe465' : '#e83f5b'}
                />
                <span>Letra maiúscula</span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={password.lowerCase ? faCheckCircle : faTimesCircle}
                  color={password.lowerCase ? '#7fe465' : '#e83f5b'}
                />
                <span>Letra minúscula</span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={password.number ? faCheckCircle : faTimesCircle}
                  color={password.number ? '#7fe465' : '#e83f5b'}
                />
                <span>Número</span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={password.specialChar ? faCheckCircle : faTimesCircle}
                  color={password.specialChar ? '#7fe465' : '#e83f5b'}
                />
                <span>Caractere especial</span>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={password.length ? faCheckCircle : faTimesCircle}
                  color={password.length ? '#7fe465' : '#e83f5b'}
                />
                <span>Mais de 8 caracteres</span>
              </p>
            </div>
          </div>

          <Input
            label="Confirme sua senha"
            type="password"
            name="ConfirmPassword"
            autoComplete="new-password"
            required
          />

          <MaskInput
            label="Coloque seu cpf"
            type="text"
            name="cpf"
            autoComplete="cpf"
            minLength={14}
            maxLength={14}
            ContainerClassName="lastChild"
            InputMaskChange={(text: string) => setCpf(text)}
            mask="CPF"
            value={cpf}
            required
          />

          <Button type="submit">Concluir cadastro</Button>
        </Form>
      </main>
      <Aside />
    </section>
  );
}
