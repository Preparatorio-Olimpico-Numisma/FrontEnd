import './styles.scss';
import { Carousel } from '../../Carousel';

export function Curse() {
  return (
    <div id="Curse">
      <div>
        <svg viewBox="0 0 1500 223" fill="none">
          <path
            d="M-1.5 116.788C-1.5 116.788 51.5 94 174.883 116.788C451.472 148.489 673.561 324.007 1018.96 139.211C1364.35 -45.586 1500 27.5 1500 27.5V0H-1.5"
            fill="white"
          />
        </svg>
      </div>
      <div className="CurseContent">
        <div>
          <h1>Aprenda com nossos cursos</h1>
        </div>
        <Carousel />
      </div>
    </div>
  );
}
