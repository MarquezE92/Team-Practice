import logo from './logo.svg';
import './App.css';
import Pablo from './Components/Pablo';

function App() {
  return (
    <div className="App">

      <Pablo/>


      <header className="App-header">
        <button id="Fefi">FEFI</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
