import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Pesquisa from './Pages/Pesquisa';
import Carregando from './Pages/Carregando';
import Resultados from './Pages/Resultados';
import Erro from './Pages/Erro';

function App() {
  const[numeroTela, setNumeroTela] = useState(0);
  function handleClick() {
    setNumeroTela((numeroTela+1) % 4)
  }
  return <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={handleClick}>Proxima Tela</button>
        {numeroTela === 0 ? <Pesquisa /> : null}
        {numeroTela === 1 ? <Resultados result={{"Rua": "Sao paulo"}} /> : null}
        {numeroTela === 2 ? <Erro errorMessage="Erro ao pesquisar" /> : null}
        {numeroTela === 3 ? <Carregando /> : null}
      


      </header>
    </div>

  </>
}

export default App;


