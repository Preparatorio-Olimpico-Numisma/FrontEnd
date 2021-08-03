import { Button } from "../../components/Button";
import check from "../../assets/images/checked-success.svg";

import './styles.scss'

type SuccessProps = {
  title: string;
  description: string;
  redirect: string;
  ButtonMessage: string;
}

export function ScreenSuccess({
  ButtonMessage,
  description,
  redirect,
  title
}: SuccessProps) {
  // const history = useHistory()

  return (
    <section id="ResetSucces">
      <div>
        <img src={check} alt="sucesso" />
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={redirect}>
          <Button isSuccess>{ButtonMessage}</Button>
        </a>
      </div>
    </section>
  );
}
