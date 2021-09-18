import { ListEventscalendar } from './list';

export function getOneDayListEventscalendar(day: string) {
  const Day = day.split(' ').join('-');

  const ArrayDay = Object.entries(ListEventscalendar).map(([key, value]) => {
    if (key === Day) {
      return value;
    }
    return null;
  });

  const ArrayDayValid = ArrayDay.filter((item) => {
    const itemRes = item?.filter(
      (items) => items !== null && items !== undefined
    );
    return itemRes !== null && itemRes !== undefined;
  });
  return ArrayDayValid[0];
}
