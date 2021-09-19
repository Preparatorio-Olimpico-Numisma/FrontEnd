import { useContext } from 'react';
import SideBarContext from '../context/sidebar';

export function useSidebarContext() {
  const sidebar = useContext(SideBarContext);
  return sidebar;
}
