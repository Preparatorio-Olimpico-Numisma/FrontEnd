import { createContext, useState, useEffect, ReactNode } from 'react';
import { getOneDayListEventscalendar } from '../components/CalendarComponents/ListEventscalendar';

type CalendarProviderProps = {
  children: ReactNode;
};

type ListItem = {
  title: string;
  description: string;
  type: string;
  typeInformation: string;
};

type CalendarContextData = {
  day: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  listCalendar: ListItem[] | null;
  setListCalendar: React.Dispatch<React.SetStateAction<ListItem[] | null>>;
  typeTestFilter: string;
  setTypeTestFilter: React.Dispatch<React.SetStateAction<string>>;
  typeInformationFilter: string;
  setTypeInformationFilter: React.Dispatch<React.SetStateAction<string>>;
};

const CalendarContext = createContext({} as CalendarContextData);

function GetCurrentDate() {
  const meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];
  const dates = new Date();
  const day = dates.getDate();
  const month = dates.getMonth();
  const year = dates.getFullYear();
  const currentMonth = meses[month];

  const data = `${day} de ${currentMonth} de ${year}`;
  return data;
}

export function CalendarContextProvider({ children }: CalendarProviderProps) {
  const [day, setDay] = useState('');
  const [listCalendar, setListCalendar] = useState<null | ListItem[]>(null);
  const [typeTestFilter, setTypeTestFilter] = useState('');
  const [typeInformationFilter, setTypeInformationFilter] = useState('');

  useEffect(() => {
    const currentday = GetCurrentDate();
    setDay(currentday);
    setListCalendar(getOneDayListEventscalendar(currentday));
  }, []);

  return (
    <CalendarContext.Provider
      value={{
        day,
        setDay,
        listCalendar,
        setListCalendar,
        setTypeInformationFilter,
        setTypeTestFilter,
        typeInformationFilter,
        typeTestFilter,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

export default CalendarContext;
