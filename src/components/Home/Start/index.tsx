import PcImg from '../../../assets/images/Computer.svg'

import './styles.scss'

export function Start() {
  return (
    <div id='Home'>
      <main>
        <section className='SectionContent'>
          <h1>
            Nós te preparamos para as principais
            <strong> olimpíadas científicas </strong>
            nacionais por menos de
            <strong> R$ 1 por dia!</strong>
          </h1>
          <p>Numisma é um preparatório olímpico com foco em olimpíadas nacionais de matemática, informática e astronomia.</p>
          <button>COMECE AQUI</button>
        </section>
        <section className='SectionImage'>
          <img src={PcImg} alt='Computer' />
        </section>
      </main>
    </div>
  )
}