import { Button } from "../../components/Button";
import check from "../../assets/images/checked-success.svg";

export function successReset() {
  // const history = useHistory()

  return (
    <section id="ResetSucces">
      <div>
        <img src={check} alt="sucesso" />
        <h1>Redefinição enviada!</h1>
        <p>
          Boa, agora é só checar o e-mail que foi enviado para você redefinir a
          sua senha e aproveitar os estudos.
        </p>
        <a href="/">
          <Button isSuccess>Voltar ao login</Button>
        </a>
      </div>
    </section>
  );
}
