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
}
export const API = {
  // eslint-disable-next-line
  async SingIn(props: SingInProps) {
    throw new Error("Api indisponível")
  },
// eslint-disable-next-line
  async SingUp(props:SingUpProps) {
    throw new Error("Api indisponível")
  },
};
