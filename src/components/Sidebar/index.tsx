import { useEffect, useState } from 'react';
import {
  faBars,
  faSignOutAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuthContext } from '../../hooks/useAuth';

import { Tooltip } from '../Tooltip';
import { sidebarData } from './sidebardata';

import Logo from '../../assets/images/LogoSideBar.svg';
import UserImg from '../../assets/images/User.svg';

import './styles.scss';

type SidebarProps = {
  children: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  const { user, SignOut } = useAuthContext();
  const [userImage, setUserImage] = useState('');
  const [isActiveSidebar, setIsActiveSidebar] = useState(false);

  const ToggleSidebar = () => setIsActiveSidebar(!isActiveSidebar);

  useEffect(() => {
    const image = user?.avatar;
    if (image) setUserImage(image);
    else setUserImage(UserImg);
  }, [user]);

  function HandleSignOut() {
    SignOut();
  }
  return (
    <div className="SlidebarContainer">
      <div className={isActiveSidebar ? 'sidebar active' : 'sidebar'}>
        <div className="logo_content">
          <div className="logo">
            <img src={Logo} alt="logo" className="Icon" />
            <div className="logo_name">Numisma</div>
          </div>
          <button onClick={ToggleSidebar}>
            {isActiveSidebar ? (
              <FontAwesomeIcon icon={faBars} className="Icon btn" />
            ) : (
              <FontAwesomeIcon icon={faTimes} className="Icon btn" />
            )}
          </button>
        </div>

        <ul className="nav_list">
          {sidebarData.map((item, index) => (
            <li key={index}>
              <Tooltip
                Name={item.title}
                href={item.path}
                icon={item.icon}
                active={window.location.pathname === item.path}
              />
            </li>
          ))}
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
