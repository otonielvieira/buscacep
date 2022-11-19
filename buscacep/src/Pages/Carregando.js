function Carregando(props) {
    return (
      <>
          <p>
            Carregando resultados ...
          </p>
          <button onClick={()=> props.goTo("PESQUISA")} className="App-button">CANCELAR</button>
      </>
    );
  }

  export default Carregando;