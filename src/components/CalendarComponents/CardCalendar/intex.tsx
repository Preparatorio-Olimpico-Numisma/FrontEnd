import { useCalendarContext } from '../../../hooks/useCalendar';
import { ListCalendarItem } from '../ListCalendarItem';

import './style.scss';

export function CardCalendar() {
  const { day, listCalendar, typeInformationFilter, typeTestFilter } =
    useCalendarContext();
  function getList() {
    if (
      typeInformationFilter &&
      typeTestFilter &&
      typeInformationFilter !== 'default' &&
      typeTestFilter !== 'default'
    ) {
      return listCalendar?.filter(
        (item) =>
          item.type === typeTestFilter &&
          item.typeInformation === typeInformationFilter
      );
    }
    if (typeInformationFilter && typeInformationFilter !== 'default') {
      return listCalendar?.filter(
        (item) => item.typeInformation === typeInformationFilter
      );
    }
    if (typeTestFilter && typeTestFilter !== 'default') {
      return listCalendar?.filter((item) => item.type === typeTestFilter);
    }

    return listCalendar;
  }
  return (
    <div className="CardCalendarContainer">
      <div className="CardCalendarTitle">
        <h2>{day}</h2>
      </div>
      <div className="CardCalendarItem">
        {getList()?.map((item, index) => {
          return (
            <ListCalendarItem
              description={item.description}
              title={item.title}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
