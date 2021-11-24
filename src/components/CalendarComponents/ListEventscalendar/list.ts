import { ListItem } from '../../../context/calendarContext';

type ListProps = Record<string, ListItem[]>;

const monthList = [
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
const typeList = ['Olimpiadas', 'Vestibulares', 'Atividades'];

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
function getMonth(j: number) {
  if (j) {
    return month + 1;
  }
  return month;
}
function generateListEventsCalendar() {
  const list: ListProps = {};
  for (let j = 0; j < 2; j += 1) {
    const monthNumber = getMonth(j);
    for (let i = 0; i <= 31; i += 1) {
      list[`${i}-de-${monthList[monthNumber]}-de-${year}`] = [
        {
          title: `${i} de ${monthList[monthNumber]}`,
          description: `Evento ${Math.floor(Math.random() * 100)}`,
          type: typeList[Math.floor(Math.random() * typeList.length)],
          typeInformation: 'DataDeInscricao',
        },
        {
          title: `${i} de ${monthList[monthNumber]}`,
          description: `Evento ${i}`,
          type: typeList[Math.floor(Math.random() * typeList.length)],
          typeInformation: 'DataDeInscricao',
        },
        {
          title: `${i} de ${monthList[monthNumber]}`,
          description: `Evento ${i}`,
          type: typeList[Math.floor(Math.random() * typeList.length)],
          typeInformation: 'DataDeInscricao',
        },
      ];
    }
  }
  return list;
}

export const ListEventscalendar = generateListEventsCalendar();
