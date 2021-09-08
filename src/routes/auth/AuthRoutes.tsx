import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../../pages/Pages-Auth/Dashboard';
import { User } from '../../pages/Pages-Auth/User';

export function AuthRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/user" exact component={User} />
      <Route path="/contact" exact component={User} />
      <Route path="/services" exact component={User} />
    </Switch>
  );
}
