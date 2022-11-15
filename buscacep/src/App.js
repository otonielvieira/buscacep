import logo from './logo.svg';
import './App.css';
import Pesquisa from './Pages/Pesquisa';
import Carregando from './Pages/Carregando';
import Resultados from './Pages/Resultados';
import Erro from './Pages/Erro';

function App() {
  return <>
  <div className="App">
  <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    <Resultados result={{
      "RUA": "São Paulo",
      "CIDADE": "São Paulo"
    }}/>
  </header>
   
  </div>
   
  </>
}

export default App;

//colocar o logo dentro da app principal para aparecer em todas as paginas
