function Erro(props) {
    return (
        <>
            <p>
                Erro na consulta
            </p>

            <p>{props.errorMessage}</p>

            <button onClick={()=> props.goTo("PESQUISA")} className="App-button">VOLTAR</button>
        </>
    );
}

export default Erro;