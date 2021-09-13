import './styles.scss';

export function Select() {
  return (
    <>
      <div className="SelectItem">
        <h2>Escolha</h2>
        <select name="TiposDeOlimpiadas" defaultValue="default">
          <option value="default">Selecione um valor</option>
          <option value="Olimpiadas">Olimpiadas</option>
          <option value="Vestibulares">Vestibulares</option>
          <option value="Atividades">Atividades</option>
        </select>
      </div>

      <div className="SelectItem">
        <h2>Tipo de informação</h2>
        <select name="TiposDeInformacao" defaultValue="default">
          <option value="default">Selecione um valor</option>
          <option value="DataDeInscricao">Data de inscrição</option>
        </select>
      </div>
    </>
  );
}
