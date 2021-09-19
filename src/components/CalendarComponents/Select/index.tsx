import { useCalendarContext } from '../../../hooks/useCalendar';

import './styles.scss';

export function Select() {
  const { setTypeTestFilter, setTypeInformationFilter } = useCalendarContext();

  return (
    <>
      <div className="SelectItem">
        <h2>Escolha</h2>
        <select
          defaultValue="default"
          onChange={(e) => setTypeTestFilter(e.currentTarget.value)}
        >
          <option value="default">Selecione um valor</option>
          <option value="Olimpiadas">Olimpíadas</option>
          <option value="Vestibulares">Vestibulares</option>
          <option value="Atividades">Atividades</option>
        </select>
      </div>

      <div className="SelectItem">
        <h2>Tipo de informação</h2>
        <select
          defaultValue="default"
          onChange={(e) => setTypeInformationFilter(e.currentTarget.value)}
        >
          <option value="default">Selecione um valor</option>
          <option value="DataDeInscricao">Data de inscrição</option>
        </select>
      </div>
    </>
  );
}
