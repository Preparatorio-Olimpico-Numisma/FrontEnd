import { Link } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';

type TooltipProps = {
  icon: IconProp;
  Name: string;
  href: string;
};

export function Tooltip({ Name, icon, href }: TooltipProps) {
  return (
    <div className="ToolTipContainer">
      <Link to={href}>
        <FontAwesomeIcon icon={icon} size="2x" className="Icon" />
        <span className="links_name">{Name}</span>
      </Link>
      <span className="Tooltip">{Name}</span>
    </div>
  );
}
