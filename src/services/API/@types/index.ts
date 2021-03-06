/* eslint-disable camelcase */
export type SignInProps = {
  email: string;
  password: string;
};

export type ResponseSignIn = {
  refresh: string;
  access: string;
};

export type SignUpProps = {
  email: string;
  password: string;
  cpf: string;
  first_name: string;
  last_name: string;
};

export type ResponseSignUp = {
  message: string;
  sucess: boolean;
  error?: string;
};

export interface RequestProps extends RequestInit {
  method:
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'GET'
    | 'HEAD'
    | 'OPTIONS'
    | 'TRACE'
    | 'CONNECT'
    | 'PATCH'
    | string;
}

export type OptionsProps = {
  props: ResponseSignIn | SignInProps | any;
  method: string;
  Token?: string | undefined;
};

export interface UserProps {
  id: number | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  email: string | undefined;
  role: null | string | undefined;
  date_joined: string | undefined;
  description: string | undefined;
  avatar: null | string | undefined;
  address: string | undefined;
  state: string | undefined;
  city: string | undefined;
  phonesnumber: string[] | null[] | any[] | any;
}
