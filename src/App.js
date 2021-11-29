import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Landing from './pages/Landing';
import {useAuth} from './contexts/AuthContext';
import { Redirect } from 'react-router';


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AuthContextProvider from './contexts/AuthContext';



export default function App() {
  return (
   <AuthContextProvider>
    <Router>
      

        <Switch>
          <Route path="/" component={Landing} exact />
          <Redirectpath exact path="/login" component={Login} />
          <Redirectpath exact path="/signup" component={Signup} />
          <ProtectedRoute 
          exact
          path="/home"
          component={Home} 
          />

        </Switch>
      

      
    </Router>
    </AuthContextProvider>
  );
}

function ProtectedRoute(props){
  const {currentUser} = useAuth()
  const {path} = props
  return currentUser?(
    <Route {...props}/>

  ) : (<Redirect to ={{
    pathname:'/login',
    state:{from:path},
  }}/>)
  
}
function Redirectpath(props){
  const {currentUser} = useAuth()
  const {path} = props
  return currentUser?
  (<Redirect to ={{
    pathname:'/home',
    state:{from:path},
  }}/>)
  
  :(
    <Route {...props}/>

  )  
}