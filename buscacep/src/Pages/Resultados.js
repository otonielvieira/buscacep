function Resultados(props) {
    const result = props.result;
    const keys = Object.keys(result);
    const elements = keys.map(key => (
        <span className="App-span" key={key}><b>{key} :</b> {result[key]}</span>
    ));

    return (
        <>
            <h3>
                Resultados para o CEP {result.cep}:
            </h3>
            {elements}
            <br />

            <button onClick={()=> props.goTo("PESQUISA")} className="App-button">CANCELAR</button>
        </>
    );
}

export default Resultados;

