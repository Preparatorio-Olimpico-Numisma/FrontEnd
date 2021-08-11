import { FormEvent } from 'react';

import LogoImg from '../../../assets/images/Logo.svg';
import Twitter from '../../../assets/images/Twitter.svg';
import Instagram from '../../../assets/images/Instagram.svg';
import Gmail from '../../../assets/images/G-mail.svg';

import './styles.scss';

export function Footer() {
  function subimitForm(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <div id="Footer">
      <main>
        <h1 id="Contato">Contate-nos</h1>
        <section className="Content">
          <form className="form" onSubmit={(e) => subimitForm(e)}>
            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Nome:</label>
              <input type="text" required autoComplete="name" name="name" />
            </div>

            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Seu melhor e-mail:</label>
              <input type="email" required autoComplete="email" />
            </div>

            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Escreva sua mensagem:</label>
              <textarea maxLength={150} />
            </div>
            <button type="submit">Enviar</button>
          </form>

          <section className="Networking">
            <h1>Redes sociais</h1>
            <div>
              <a
                href="https://www.linkedin.com/company/prep-numisma/"
                target="blank"
              >
                <img src={Twitter} alt="Twitter" />
                <p>LinkedIn</p>
              </a>
              <a href="https://www.instagram.com/prep_numisma/" target="blank">
                <img src={Instagram} alt="Instagram" />
                <p>Instagram</p>
              </a>
              <a href="mailto:prep-numisma@gmail.com" target="blank">
                <img src={Gmail} alt="Gmail" />
                <p>G-mail</p>
              </a>
            </div>
          </section>

          <section className="Links">
            <h1>Nossos links</h1>
            <div>
              <a href="#Home">Home</a>
              <a href="#About">Sobre nós</a>
              <a href="#Blog">Blog</a>
              <a href="#compet">Competições</a>
              <a href="#Contato">Contato</a>
              <a href="#Login">Login</a>
            </div>
          </section>

          <section className="Logo">
            <img src={LogoImg} alt="Logo" />
            <h1>Numisma</h1>
          </section>
        </section>
      </main>
      <aside>
        <div className="line" />
        <p>&copy; 2021 Copyright Numisma</p>
      </aside>
    </div>
  );
}
