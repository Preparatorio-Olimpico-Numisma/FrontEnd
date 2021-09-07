import { useEffect, useRef, useState } from 'react';
import {
  faBars,
  faTh,
  faUser,
  faIdCard,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuthContext } from '../../hooks/useAuth';

import { Tooltip } from '../Tooltip';

// import Logo from '../../assets/images/Logo.svg';
import UserImg from '../../assets/images/User.svg';

import './styles.scss';

// get our fontawesome imports

type SliderbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export function Sliderbar({ children, isOpen, setIsOpen }: SliderbarProps) {
  const { user, SignOut } = useAuthContext();
  const [userImage, setUserImage] = useState('');
  const refButton = useRef<HTMLButtonElement>(null);
  const refSliderbar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = user?.data?.image;
    if (image) {
      setUserImage(image);
    } else {
      setUserImage(UserImg);
    }
  }, [user]);

  function HandleSignOut() {
    SignOut();
  }

  function HandleCloseSlidebar() {
    refSliderbar.current?.classList.toggle('active');
    setIsOpen(false);
  }

  return (
    <div className="SlidebarContainer">
      <div className="sliderbar" ref={refSliderbar}>
        <div className="logo_content">
          <div className="logo">
            <FontAwesomeIcon icon={faCog} size="2x" className="Icon" />
            <div className="logo_name">Numisma</div>
          </div>
          <button onClick={HandleCloseSlidebar} ref={refButton}>
            <FontAwesomeIcon icon={faBars} className="Icon btn" />
          </button>
        </div>

        <ul className="nav_list">
          <li>
            <Tooltip Link="#a" Name="Dashboard" icon={faTh} />
          </li>
          <li>
            <Tooltip Link="#a" Name="User" icon={faUser} />
          </li>
          <li>
            <Tooltip Link="#a" Name="Services" icon={faCog} />
          </li>
          <li>
            <Tooltip Link="#a" Name="Contact" icon={faIdCard} />
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
