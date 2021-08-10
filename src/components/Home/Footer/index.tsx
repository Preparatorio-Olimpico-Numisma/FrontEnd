import LogoImg from '../../../assets/images/Logo.svg';
// import Linkedin from '../../../assets/images/LinkedIn.svg';
import Twitter from '../../../assets/images/Twitter.svg';
import Instagram from '../../../assets/images/Instagram.svg';
// import Facebook from '../../../assets/images/Facebook.svg';
import Gmail from '../../../assets/images/G-mail.svg';

import './styles.scss';
import { FormEvent } from 'react';

export function Footer() {
  function subimitForm(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <div id='Footer'>
      <main>
        <h1 id='Contato'>Contate-nos</h1>
        <section className='Content'>
          <form className='form' onSubmit={(e) => subimitForm(e)}>
            <div>
              <label>Nome:</label>
              <input type='text' required autoComplete='name'/>
            </div>

            <div>
              <label>Seu melhor e-mail:</label>
              <input type='email' required autoComplete='email'/>
            </div>

            <div>
              <label>Escreva sua mensagem:</label>
              <textarea maxLength={150} />
            </div>
            <button type='submit'>Enviar</button>
          </form>

          <section className='Networking'>
            <h1>Redes sociais</h1>
            <div>
              {/* <a href='' target='blank'>
                <img src={Linkedin} alt='Linkedin' />
                <p>Twitter</p>
              </a> */}
              <a href='https://www.linkedin.com/company/prep-numisma/' target='blank'>
                <img src={Twitter} alt='Twitter' />
                <p>LinkedIn</p>
              </a>
              <a href='https://www.instagram.com/prep_numisma/' target='blank'>
                <img src={Instagram} alt='Instagram' />
                <p>Instagram</p>
              </a>
              {/* <a href='#' target='blank'>
                <img src={Facebook} alt='Facebook' />
                <p>Facebook</p>
              </a> */}
              <a href='mailto:prep-numisma@gmail.com' target='blank'>
                <img src={Gmail} alt='Gmail' />
                <p>G-mail</p>
              </a>
            </div>
          </section>

          <section className='Links'>
            <h1>Nossos links</h1>
            <div>
              <a href='#Home'>Home</a>
              <a href='#About'>Sobre nós</a>
              <a href='#Blog'>Blog</a>
              <a href='#compet'>Competições</a>
              <a href='#Contato'>Contato</a>
              <a href='#Login'>Login</a>
            </div>
          </section>

          <section className='Logo'>
            <img src={LogoImg} alt='Logo' />
            <h1>Numisma</h1>
          </section>
        </section>
      </main>
      <aside>
        <div className='line'></div>
        <p>&copy; 2021 Copyright Numisma</p>
      </aside>
    </div>
  );
}
