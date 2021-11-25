import { Route, Switch } from 'react-router-dom';
import { SidebarContextProvider } from '../../context/sidebar';
import { CalendarComponent } from '../../pages/Auth/Calendar';

import { Dashboard } from '../../pages/Auth/Dashboard';
import { User } from '../../pages/Auth/User';

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
