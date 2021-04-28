import logo from './logo.svg';
import './App.css';

export default function App(backgroundColor,parrafo) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {parrafo}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style ={backgroundColor}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


