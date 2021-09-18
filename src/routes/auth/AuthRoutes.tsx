import { Route, Switch } from 'react-router-dom';
import { SidebarContextProvider } from '../../context/sidebar';
import { CalendarComponent } from '../../pages/Pages-Auth/Calendar';

import { Dashboard } from '../../pages/Pages-Auth/Dashboard';
import { User } from '../../pages/Pages-Auth/User';

export function AuthRoutes() {
  return (
    <SidebarContextProvider>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/user" exact component={User} />
        <Route path="/calendar" exact component={CalendarComponent} />
      </Switch>
    </SidebarContextProvider>
  );
}
