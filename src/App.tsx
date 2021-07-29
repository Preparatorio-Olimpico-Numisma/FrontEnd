import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { SingIn } from "./pages/SingIn";
import { SingUp } from "./pages/SingUp";
import { ResetPassword } from "./pages/reset-password";
import { successReset } from "./pages/reset-password/sucess";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/singin" exact component={SingIn} />
        <Route path="/singup" exact component={SingUp} />
        <Route path="/reset-password" exact component={ResetPassword} />
        <Route path="/reset-password/success" exact component={successReset} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
