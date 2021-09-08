import { Link } from 'react-router-dom';

import { Button } from '../Button';
import check from '../../assets/images/CheckedSuccess.svg';

import './styles.scss';

type SuccessProps = {
  title: string;
  description: string;
  redirect: string;
  ButtonMessage: string;
};

export function ScreenSuccess({
  ButtonMessage,
  description,
  redirect,
  title,
}: SuccessProps) {
  // const history = useHistory()

  return (
    <section id="ResetSucces">
      <div>
        <img src={check} alt="sucesso" />
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={redirect}>
          <Button isSuccess>{ButtonMessage}</Button>
        </Link>
      </div>
    </section>
  );
}
