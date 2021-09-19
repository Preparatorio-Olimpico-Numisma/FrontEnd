import { Sidebar } from '../../../components/Sidebar';
import { WelcomeCalendar } from '../../../components/CalendarComponents/Welcome';
import { CalendarComponentItem } from '../../../components/CalendarComponents/Calendar';
import { Select } from '../../../components/CalendarComponents/Select';
import { CalendarContextProvider } from '../../../context/calendarContext';

import './styles.scss';
import { CardCalendar } from '../../../components/CalendarComponents/CardCalendar/intex';

export function CalendarComponent() {
  return (
    <Sidebar>
      <CalendarContextProvider>
        <WelcomeCalendar />
        <section className="SectionCalendarContainer">
          <div className="SelectContainer">
            <Select />
          </div>
          <div className="CalendarContainer">
            <CalendarComponentItem />
          </div>
          <CardCalendar />
        </section>
      </CalendarContextProvider>
    </Sidebar>
  );
}
