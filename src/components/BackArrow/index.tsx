import { useHistory } from "react-router-dom";
import Back from "../../assets/login/back-arrow.svg";

export function BackArrow() {
  const history = useHistory();
  return (
    <button onClick={() => history.goBack()} className="backButton">
      <img src={Back} alt="voltar" />
    </button>
  );
}
