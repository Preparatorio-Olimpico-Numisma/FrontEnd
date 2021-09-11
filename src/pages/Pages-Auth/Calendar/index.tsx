import Calendar from 'react-calendar';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Sidebar } from '../../../components/Sidebar';

import './styles.scss';

function maxDate() {
  const date = new Date();

  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();
  const dateFinal = new Date(year, month + 1, day);
  return dateFinal;
}

function minDate() {
  return new Date();
}

export function CalendarComponent() {
  const MaxDate = maxDate();
  const MinDate = minDate();
  return (
    <Sidebar>
      <section>
        <div>
          <h1>Bem-vindo ao calendário, estudante!</h1>
          <p>
            Aqui você encontra todos os dados em relação á olimpíadas,
            vestibulares e atividades do Numisma
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
      <section className="CalendarContainer">
        <div className="SelectContainer">
          <div className="SelectItem">
            <h2>Escolha</h2>
            <select name="TiposDeOlimpiadas" defaultValue="default">
              <option value="default">Selecione um valor</option>
              <option value="Olimpiadas">Olimpiadas</option>
              <option value="Vestibulares">Vestibulares</option>
              <option value="Atividades">Atividades</option>
            </select>
          </div>

          <div className="SelectItem">
            <h2>Tipo de informação</h2>
            <select name="TiposDeInformacao" defaultValue="default">
              <option value="default">Selecione um valor</option>
              <option value="DataDeInscricao">Data de inscrição</option>
            </select>
          </div>
        </div>
        <div>
          <Calendar
            calendarType="US"
            view="month"
            nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
            prevLabel={<FontAwesomeIcon icon={faArrowLeft} />}
            next2Label={null}
            prev2Label={null}
            maxDate={MaxDate}
            minDate={MinDate}
            minDetail="month"
          />
        </div>
        <div>
          <h2>{MinDate.getMonth()}</h2>
          <div>Prova</div>
        </div>
      </section>
    </Sidebar>
  );
}
