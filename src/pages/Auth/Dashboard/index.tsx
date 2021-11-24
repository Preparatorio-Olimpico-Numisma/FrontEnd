import { Sidebar } from '../../../components/Sidebar';
import './styles.scss';

export function Dashboard() {
  return (
    <Sidebar>
      <main id="Dashboard">
        <svg viewBox="0 0 400 400" className="black">
          <circle cx="200" cy="200" r="15" fill="#D4FAE5">
            <animateMotion
              path="M12 .587 l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="200" cy="200" r="15" fill="#948EFA">
            <animateMotion
              path="M 0, 0 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              dur="6.2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="200" cy="200" r="15" fill="#74FAAD">
            <animateMotion
              path="M 0, 0 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              dur="6.4s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="200" cy="200" r="15" fill="#FA9991">
            <animateMotion
              path="M 0, 0 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              dur="6.6s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="200" cy="200" r="15" fill="#FAE67D">
            <animateMotion
              path="M 0, 0 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              dur="6.8s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg> */}
      </main>
    </Sidebar>
  );
}
