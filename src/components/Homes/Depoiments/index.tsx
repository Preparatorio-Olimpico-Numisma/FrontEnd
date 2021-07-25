import BallsImg from '../../../assets/images/Balls.svg'

import './styles.scss'

export function Depoiments() {
  return (
    <section id="Depoiments">
      <section className="DepoimentsWave">
        <svg viewBox="0 0 1500 199" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1 87C-1 87 -2 105 263 80.8908C529 56 743 -77 1075 63.745C1408 205 1500 161 1500 161V199H0" fill="white" />
        </svg>
      </section>
      <section className="DepoimentsContent">
        <div>
          <h1>20,000 alunos satisfeitos ao redor do Brasil</h1>
          <div></div>
          <p>Incrível, não?! Nós somos muito gratos pela união desta maravilhosa comunidade de competidores olímpicos.</p>
        </div>
        <img src={BallsImg} alt="Balls" />
      </section>
    </section>
  )
}