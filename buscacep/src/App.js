import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>BUSCA CEP</h1>
        <p>
          QuaL<code> CEP</code> você deseja consultar ?
        </p>
          <input /><br />
          <button>BUSCAR</button>
      </header>
    </div>
  );
}

export default App;
