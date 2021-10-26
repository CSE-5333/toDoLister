import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Info from './pages/Info';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/info" component={Info} />

      </Switch>

    
    
    </Router>
  );
}

export default App;
