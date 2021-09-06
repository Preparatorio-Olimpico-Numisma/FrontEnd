import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../../pages/Pages-Auth/Dashboard';

export function AuthRoutes() {
  return (
    <Switch>
      <Route path="/Dashboard" exact component={Dashboard} />
    </Switch>
  );
}
