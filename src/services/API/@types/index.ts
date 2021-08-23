export type SingInProps = {
  email: string;
  password: string;
};

export type ResponseSingIn = {
  refresh: string;
  access: string;
};

export type SingUpProps = {
  email: string;
  password: string;
  cpf: string;
  first_name: string;
  last_name: string;
};

export type ResponseSingUp = {
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
  props: ResponseSingIn | SingInProps;
  method: string;
};
