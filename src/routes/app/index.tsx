import { Route, Switch } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { SignIn } from '../../pages/SignIn';
import { SignUp } from '../../pages/SignUp';
import { ResetPassword } from '../../pages/reset-password';
import { ScreenSuccess } from '../../components/screen-success/sucess';

export function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/singin" exact component={SignIn} />
      <Route path="/singup" exact component={SignUp} />
      <Route path="/reset-password" exact component={ResetPassword} />
      <Route path="/success" exact component={ScreenSuccess} />
    </Switch>
  );
}
