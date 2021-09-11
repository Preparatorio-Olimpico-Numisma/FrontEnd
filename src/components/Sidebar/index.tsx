import { useEffect, useRef, useState } from 'react';
import {
  faBars,
  faTh,
  faUser,
  faCalendarAlt,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuthContext } from '../../hooks/useAuth';

import { Tooltip } from '../Tooltip';

import Logo from '../../assets/images/LogoSideBar.svg';
import UserImg from '../../assets/images/User.svg';

import './styles.scss';

type SidebarProps = {
  children: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  const { user, SignOut } = useAuthContext();
  const [userImage, setUserImage] = useState('');
  const refButton = useRef<HTMLButtonElement>(null);
  const refSidebar = useRef<HTMLDivElement>(null);
  const UlRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const image = user?.avatar;
    if (image) setUserImage(image);
    else setUserImage(UserImg);
  }, [user]);

  function HandleSignOut() {
    SignOut();
  }

  function HandleCloseSlidebar() {
    refSidebar.current?.classList.toggle('active');
  }

  return (
    <div className="SlidebarContainer">
      <div className="sidebar" ref={refSidebar}>
        <div className="logo_content">
          <div className="logo">
            <img src={Logo} alt="logo" className="Icon" />
            <div className="logo_name">Numisma</div>
          </div>
          <button onClick={HandleCloseSlidebar} ref={refButton}>
            <FontAwesomeIcon icon={faBars} className="Icon btn" />
          </button>
        </div>

        <ul className="nav_list" ref={UlRef}>
          <li>
            <Tooltip href="/" Name="Dashboard" icon={faTh} />
          </li>
          <li>
            <Tooltip href="/user" Name="User" icon={faUser} />
          </li>
          <li>
            <Tooltip href="/services" Name="Services" icon={faCog} />
          </li>
          <li>
            <Tooltip href="/calendar" Name="calendar" icon={faCalendarAlt} />
          </li>
        </ul>

        <div className="profile_content">
          <div className="profile">
            <div className="profile_datails">
              <img src={userImage} alt={user?.first_name} />
              <div className="name_job">
                <div className="name">{user?.first_name}</div>
                <div className="job">{user?.last_name}</div>
              </div>
            </div>
            <button onClick={HandleSignOut}>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="2x"
                className="SingOut Icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="ChildrenContent">{children}</div>
    </div>
  );
}
