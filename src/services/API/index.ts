import {
  OptionsProps,
  RequestProps,
  ResponseSingIn,
  ResponseSingUp,
  SingInProps,
  SingUpProps,
} from './@types';

const BaseURL = 'https://numisma-api.herokuapp.com';
const Token = process.env.REACT_APP_API_KEY;

function Options({ method, props }: OptionsProps) {
  const json = JSON.stringify(props);

  const options: RequestProps = {
    body: json,
    headers: {
      authorization: `Token ${Token}`,
      'Content-Type': 'application/json',
    },
    method,
    mode: 'cors',
  };

  return options;
}

function SaveTokens(data: ResponseSingIn) {
  const { access, refresh } = data;
  localStorage.setItem('Numisma@TokenAcess', access);
  localStorage.setItem('Numisma@TokenRefrash', refresh);
}

export const API = {
  async SingIn(props: SingInProps) {
    const response = await fetch(
      `${BaseURL}/api/token/`,
      Options({ props, method: 'POST' })
    );

    if (response.status !== 200)
      throw new Error('Não foi possível fazer o login');

    const data: ResponseSingIn = await response.json();
    SaveTokens(data);
  },

  async SingUp(props: SingUpProps) {
    const response = await fetch(
      `${BaseURL}/api/user/register/`,
      Options({ props, method: 'POST' })
    );

    const data: ResponseSingUp = await response.json();
    if (data.sucess === false) throw new Error(data.error);
    if (response.status < 200 || response.status > 300)
      throw new Error('Não foi possível fazer o cadastro');
    return data.message;
  },
};
