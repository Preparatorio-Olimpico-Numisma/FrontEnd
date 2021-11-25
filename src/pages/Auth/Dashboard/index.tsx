import { Sidebar } from '../../../components/Sidebar';
import { CircleSvg } from './Circle';
import './styles.scss';

export function Dashboard() {
  return (
    <Sidebar>
      <main id="Dashboard">
        <svg viewBox="0 0 400 400" className="black">
          <CircleSvg color=" #ff0000" time={6} />
          <CircleSvg color="#ff7f00" time={6.2} />
          <CircleSvg color="#ffff00" time={6.4} />
          <CircleSvg color="#00ff00" time={6.6} />
          <CircleSvg color="#0000ff" time={6.8} />
          <CircleSvg color="#4b0082" time={7} />
          <CircleSvg color="#8a2be2" time={7.2} />
        </svg>
      </main>
    </Sidebar>
  );
}
