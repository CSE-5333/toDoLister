
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <div style={{backgroundColor:"#A4FAD2", padding: "15px"}}>
      <div className="todoApp">
  
      <ToDoList/>
    </div>
    </div>
    
  );
}

export default App;
