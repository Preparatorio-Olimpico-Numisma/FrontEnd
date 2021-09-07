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
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  cpf: string;
  created_at: string;
  updated_at: string;
  refresh: string;
  access: string;
  data?: {
    image: string;
  } | undefined;
}