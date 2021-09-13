import CalendarImg from '../../../assets/images/Calendar-img.svg';

import './styles.scss';

export function WelcomeCalendar() {
  return (
    <section className="CalendarTextContainer">
      <div className="TextItem">
        <h1>Bem-vindo ao calendário, estudante!</h1>
        <p>
          Aqui você encontra todos os dados em relação á olimpíadas,
          vestibulares e atividades do Numisma
        </p>
      </div>
      <div className="ImageItem">
        <img src={CalendarImg} alt="CalendarImage" />
      </div>
    </section>
  );
}
