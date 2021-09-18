import './styles.scss';

type ListCalendarItemProps = {
  title: string;
  description: string;
};

export function ListCalendarItem({
  description,
  title,
}: ListCalendarItemProps) {
  return (
    <div className="CardCalendar">
      <div className="CardCalendarItemTitle">
        <h1>{title}</h1>
      </div>
      <div className="line" />
      <div className="CardCalendarItemDescription">{description}</div>
    </div>
  );
}
