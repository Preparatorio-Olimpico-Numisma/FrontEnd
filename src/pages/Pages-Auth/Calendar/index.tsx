import Calendar from 'react-calendar';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Sidebar } from '../../../components/Sidebar';

import './styles.scss';

function maxDate() {
  // new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
  const date = new Date();

  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();
  // 2021-09-09T13:56:43.051Z
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
    </Sidebar>
  );
}
