import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Pesquisa from './Pages/Pesquisa';
import Carregando from './Pages/Carregando';
import Resultados from './Pages/Resultados';
import Erro from './Pages/Erro';

function App() {

  const[nomeTela, setNomeTela] = useState("PESQUISA");

  function goTo(nomeTela) {
    setNomeTela(nomeTela);
  }

  return <>
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        {nomeTela === "PESQUISA" ? <Pesquisa goTo={goTo}/> : null}
        {nomeTela === "RESULTADOS" ? <Resultados result={{"Rua": "Sao paulo"}} goTo={goTo}/> : null}
        {nomeTela === "ERRO" ? <Erro errorMessage="Erro ao pesquisar" goTo={goTo}/> : null}
        {nomeTela === "CARREGANDO" ? <Carregando goTo={goTo}/> : null}
      
      </header>
    </div>

  </>
}

export default App;


