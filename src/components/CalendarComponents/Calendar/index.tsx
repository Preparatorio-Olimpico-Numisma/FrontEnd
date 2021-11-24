import { ChangeEvent } from 'react';
import Calendar from 'react-calendar';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useCalendarContext } from '../../../hooks/useCalendar';
import { getOneDayListEventscalendar } from '../ListEventscalendar';

import './styles.scss';

function getCurrentYearMonthDay() {
  const date = new Date();

  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();

  return { month, year, day };
}

function maxDate() {
  const { month, year } = getCurrentYearMonthDay();
  const dateFinal = new Date(year, month + 2, 0);
  return dateFinal;
}

function minDate() {
  const { month, year } = getCurrentYearMonthDay();
  const dateFinal = new Date(year, month, 1);
  return dateFinal;
}

export function CalendarComponentItem() {
  const { setDay, setListCalendar } = useCalendarContext();
  const MaxDate = maxDate();
  const MinDate = minDate();

  function OnchangeCalendar(value: Date, event: ChangeEvent<HTMLInputElement>) {
    const dayClicked = event.target.outerHTML.split('"')[1];
    setDay(dayClicked);
    if (dayClicked) {
      const res = getOneDayListEventscalendar(dayClicked);
      setListCalendar(res);
    }
  }
  return (
    <>
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
        onChange={(value: Date, event: ChangeEvent<HTMLInputElement>) =>
          OnchangeCalendar(value, event)
        }
      />
    </>
  );
}
