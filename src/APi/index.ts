import axios from "axios";

export type SingInProps = {
  email: string;
  password: string;
};

export type SingUpProps = {
  email: string;
  password: string;
  cpf: string;
  first_name: string;
  last_name: string;
};

const headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('authorization', `Bearer ${process.env.TOKEN}`);

const api = axios.create({
  baseURL: "https://numisma-api.herokuapp.com",
  headers: headers
});

export const API = {
  // eslint-disable-next-line
  async SingIn(props: SingInProps) {
    const response = await api.get("/", { data: props });
    return response.data;
    // throw new Error("Api indisponível")
  },
  // eslint-disable-next-line
  async SingUp(props: SingUpProps) {
    // console.log(props);
    const response = await api.post("/api/user/register/", props, {headers:headers});
    console.log(response);
    // return response.data
    throw new Error("Api indisponível");
  },
};
