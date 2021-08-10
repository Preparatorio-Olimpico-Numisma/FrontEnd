import Logo from '../../../assets/images/Logo.svg';

import './styles.scss';

export function Aside() {
  return (
    <aside id='Aside'>
      <img src={Logo} alt='Logo' />
      <div>
        <h1>Numisma seu preparatório olímpico</h1>
        <p>Prepare-se para as principais olimpíadas do Brasil</p>
      </div>
    </aside>
  );
}
