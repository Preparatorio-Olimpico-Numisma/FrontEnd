import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';

type TooltipProps = {
  icon: IconProp;
  Name: string;
  Link: string;
};

export function Tooltip({ Name, icon, Link }: TooltipProps) {
  return (
    <div className="ToolTipContainer">
      <a href={Link}>
        <FontAwesomeIcon icon={icon} size="2x" className="Icon" />
        <span className="links_name">{Name}</span>
      </a>
      <span className="Tooltip">{Name}</span>
    </div>
  );
}
