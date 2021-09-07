import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import LogoImg from '../../assets/images/Logo.svg';
import Dropimg from '../../assets/images/Drop.svg';

import './styles.scss';

export function Header() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const Toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (window.innerWidth < 1000) {
      const ClassListNav = navRef.current?.classList;
      const ClassListUl = ulRef.current?.classList;
      if (!isOpen) {
        ClassListNav?.remove('SlideContainer');
        ClassListUl?.remove('SlideDropDowContainer');
        ClassListNav?.remove('LoginContainer');
      } else {
        ClassListNav?.add('SlideContainer');
        ClassListUl?.add('SlideDropDowContainer');
        ClassListNav?.add('LoginContainer');
      }
    }
  }, [isOpen]);

  return (
    <header id="Header">
      <nav ref={navRef}>
        <button onClick={Toggle}>
          <img src={LogoImg} alt="logo" className="Logo" />
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
          <button
            onClick={() => {
              history.push('/singin');
            }}
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}
