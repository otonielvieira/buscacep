function Erro(props) {
    return (
        <>
            <p>
                Erro na consulta
            </p>

            <p>{props.errorMessage}</p>

            <button className="App-button">CANCELAR</button>
        </>
    );
}

export default Erro;