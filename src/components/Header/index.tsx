import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import LogoImg from '../../assets/images/Logo.svg';
import Dropimg from '../../assets/images/Drop.svg';

import './styles.scss';

export function Header() {
  const history = useHistory();
  const navRef = useRef<HTMLElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  function OpenNav() {
    if (window.innerWidth < 1000) {
      navRef.current?.classList.toggle('SlideContainer');
      ulRef.current?.classList.toggle('SlideDropDowContainer');
      navRef.current?.lastElementChild?.classList.toggle('LoginContainer');
    }
  }

  return (
    <>
      <header id="Header">
        <nav ref={navRef}>
          <button onClick={OpenNav}>
            <img src={LogoImg} alt="logo" />
            <p>Numisma</p>
          </button>
          <ul ref={ulRef}>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">Sobre nós</a>
            </li>
            <li>
              <a href="#Blog">Blog</a>
            </li>
            <div className="DropDowContainer">
              <li>
                <p>Competições</p>
                <img src={Dropimg} alt="Drop" />
              </li>
              <ul className="DropDow">
                <li>
                  <a href="#Calendar">Calendario</a>
                </li>
                <li>
                  <a href="#Learning">Conheça</a>
                </li>
                <li>
                  <a href="#Learning">Aprenda</a>
                </li>
              </ul>
            </div>
            <li>
              <a href="#Contato">Contato</a>
            </li>
          </ul>
          <div className="login">
            <button onClick={() => history.push('/singin')}>Login</button>
          </div>
        </nav>
      </header>
    </>
  );
}
