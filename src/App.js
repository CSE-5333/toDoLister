import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Student <br/>
          Let's organize your life. 
        </p>
        <a
          className="App-link"
          href="https://uta.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          The University of Texas at Arlington
        </a>
      </header>
    </div>
  );
}

export default App;
