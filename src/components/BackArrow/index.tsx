import { ButtonHTMLAttributes } from 'react';
import { useHistory } from 'react-router-dom';

import Back from '../../assets/login/BackArrow.svg';

import './styles.scss';

export function BackArrow({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const history = useHistory();
  return (
    <button onClick={() => history.goBack()} className="backButton" {...rest}>
      <img src={Back} alt="voltar" />
    </button>
  );
}
