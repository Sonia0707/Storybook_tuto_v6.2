import logo from './logo.svg';
import './App.css';

export default function App({backgroundColor,parrafo}) {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style ={backgroundColor && {backgroundColor}}/>
        <p style ={backgroundColor && {backgroundColor}}>
          {parrafo}
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


