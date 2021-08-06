import { FieldsProps } from "../hooks/useForm";

type SingInProps = {
  email: string;
  password: string;
};


export const API = {
  // eslint-disable-next-line
  async SingIn({email, password}: SingInProps) {
    throw new Error("Api indisponível")
  },
// eslint-disable-next-line
  async SingUp(props:FieldsProps) {
    throw new Error("Api indisponível")
  },
};
