export type SingInProps = {
  email: string;
  password: string;
};

export type SingUpProps = {
  email: string;
  password: string;
  cpf: string;
  // eslint-disable-next-line camelcase
  first_name: string;
  // eslint-disable-next-line camelcase
  last_name: string;
};

interface RequestProps extends RequestInit {
  method: 'POST' | 'PUT' | 'DELETE' | 'GET';
}

const baseURL = 'https://numisma-api.herokuapp.com';
const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('authorization', `Bearer ${process.env.TOKEN}`);

const BaseData: RequestProps = {
  body: null,
  headers,
  method: 'POST',
  mode: 'no-cors',
};

export const API = {
  async SingIn(props: SingInProps): Promise<void> {
    BaseData.body = JSON.stringify(props);
    const response = await fetch(`${baseURL}/api/token`, BaseData);
    const data = await response.json();
    console.log(data);
    throw new Error('Api indisponível');
  },
  async SingUp(props: SingUpProps): Promise<void> {
    BaseData.body = JSON.stringify(props);
    const response = await fetch(`${baseURL}/api/register`, BaseData);
    const data = await response.json();
    console.log(data);
    throw new Error('Api indisponível');
  },
};
