import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from './pages/Home'
import { Login } from "./pages/login";

function App() {
  return (
    
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
