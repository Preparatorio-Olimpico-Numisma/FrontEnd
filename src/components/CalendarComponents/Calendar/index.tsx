import Calendar from 'react-calendar';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export function CalendarComponentItem() {
  const MaxDate = maxDate();
  const MinDate = minDate();
  return (
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
  );
}
