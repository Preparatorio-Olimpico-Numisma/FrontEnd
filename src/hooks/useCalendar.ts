import { useContext } from 'react';
import CalendarContext from '../context/calendarContext';

export function useCalendarContext() {
  const calendar = useContext(CalendarContext);
  return calendar;
}
