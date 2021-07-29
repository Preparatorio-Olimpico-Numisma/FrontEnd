import React from "react";
import { useHistory } from "react-router-dom";

import LogoImg from "../../assets/images/Logo.svg";
import Dropimg from "../../assets/images/Drop.svg";

import "./styles.scss";
export function Header() {
  const history = useHistory()

  function OpenNav() {
    if (window.innerWidth < 1000) {
      document.querySelector("#Header nav")?.classList.toggle("SlideContainer");
      document
        .querySelector("#Header nav ul")
        ?.classList.toggle("SlideDropDowContainer");
      document
        .querySelector("#Header nav .login")
        ?.classList.toggle("LoginContainer");
    }
  }
  
  return (
    <React.Fragment>
      <header id="Header">
        <nav>
          <div onClick={OpenNav}>
            <img src={LogoImg} alt="logo" />
            <p>Numisma</p>
          </div>
          <ul>
            <li>
              <a href="#Home">Home</a>{" "}
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
            <button onClick={() => history.push("/singin")}>Login</button>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}
