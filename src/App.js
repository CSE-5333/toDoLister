import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Landing from './pages/Landing';


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AuthContextProvider from './contexts/AuthContext';



function App() {
  return (
   <AuthContextProvider>
    <Router>
      

        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />

        </Switch>
      

      
    </Router>
    </AuthContextProvider>
  );
}

export default App;