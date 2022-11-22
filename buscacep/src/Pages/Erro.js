function Erro(props) {
    return (
        <>
            <p>{props.errorMessage}</p>
            <button onClick={()=> props.goTo("PESQUISA")} className="App-button">VOLTAR</button>
        </>
    );
}

export default Erro;