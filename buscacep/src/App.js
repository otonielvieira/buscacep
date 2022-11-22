import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import Pesquisa from './Pages/Pesquisa';
import Carregando from './Pages/Carregando';
import Resultados from './Pages/Resultados';
import Erro from './Pages/Erro';

function App() {

  const[nomeTela, setNomeTela] = useState("PESQUISA");
  const [resultado, setResultado] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const ticket = useRef(1);

  function goTo(nomeTela) {
    setNomeTela(nomeTela);
  }

  return <>
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        {nomeTela === "PESQUISA" ? <Pesquisa goTo={goTo} setResultado={setResultado} setErrorMessage={setErrorMessage} ticket={ticket}/> : null}
        {nomeTela === "RESULTADOS" ? <Resultados result={resultado} goTo={goTo}/> : null}
        {nomeTela === "ERRO" ? <Erro errorMessage={errorMessage} setErrorMessage={setErrorMessage}  goTo={goTo}/> : null}
        {nomeTela === "CARREGANDO" ? <Carregando goTo={goTo} ticket={ticket}/> : null}
      
      </header>
    </div>

  </>
}

export default App;


