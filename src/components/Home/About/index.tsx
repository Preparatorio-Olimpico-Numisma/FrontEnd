import Person from '../../../assets/images/Ilustration.svg';
import Check from '../../../assets/images/Check.svg';

import './styles.scss';

export function About() {
  return (
    <div id="About">
      <div className="About">
        <svg
          viewBox="0 0 1500 199"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1 87C-1.00001 87 -2.80881 105 263 80.8908C529 56 743 -77 1075 63.745C1408 205 1500 161 1500 161V199H0"
            fill="white"
          />
        </svg>
        <div className="AboutTitle">
          <h1>Sobre nós</h1>
          <div />
        </div>
      </div>

      <main>
        <section>
          <div className="Mission">
            <h1>Missão</h1>
            <p>
              A missão do <strong>Numisma</strong> é democratizar o acesso às
              olimpíadas científicas, levando treinamentos de alta qualidade
              para todos. Além disso, nós também temos o intuito de conectar
              olímpicos de vários lugares através de nossa comunidade.
            </p>
          </div>
          <div className="Offer">
            <h1>Oferecemos</h1>
            <ul>
              <li>
                <img src={Check} alt="Check" />
                <p>Vídeo-aulas</p>
              </li>
              <li>
                <img src={Check} alt="Check" />
                <p>Guias de estudo</p>
              </li>
              <li>
                <img src={Check} alt="Check" />
                <p>Exercícios</p>
              </li>
              <li>
                <img src={Check} alt="Check" />
                <p>Calendário</p>
              </li>
              <li>
                <img src={Check} alt="Check" />
                <p>Comunidade</p>
              </li>
              <li>
                <img src={Check} alt="Check" />
                <p>Bootcamps</p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <img src={Person} alt="Person" />
        </section>
      </main>
    </div>
  );
}
