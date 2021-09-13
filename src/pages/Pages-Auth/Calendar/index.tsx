import { Sidebar } from '../../../components/Sidebar';
import { WelcomeCalendar } from '../../../components/CalendarComponents/Welcome';
import { CalendarComponentItem } from '../../../components/CalendarComponents/Calendar';
import { Select } from '../../../components/CalendarComponents/Select';
import { ListCalendarItem } from '../../../components/ListCalendarItem';

import './styles.scss';

function GetCurrentDate() {
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const dates = new Date();
  const day = dates.getDate();
  const month = dates.getMonth();
  const currentMonth = meses[month];

  const data = `${day} de ${currentMonth}`;

  return data;
}

export function CalendarComponent() {
  return (
    <Sidebar>
      <WelcomeCalendar />
      <section className="SectionCalendarContainer">
        <div className="SelectContainer">
          <Select />
        </div>
        <div className="CalendarContainer">
          <CalendarComponentItem />
        </div>
        <div className="CardCalendarContainer">
          <div className="CardCalendarTitle">
            <h2>{GetCurrentDate()}</h2>
          </div>
          <div className="CardCalendarItem">
            <ListCalendarItem />
            <ListCalendarItem />
            <ListCalendarItem />
            <ListCalendarItem />
            <ListCalendarItem />
          </div>
        </div>
      </section>
    </Sidebar>
  );
}
