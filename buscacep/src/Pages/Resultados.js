function Resultados(props) {
    const result = props.result;
    const keys = Object.keys(result);
    const elements = keys.map(key => (
        <span className="App-span" key={key}><b>{key} :</b> {result[key]}</span>
    ));

    return (
        <>
            <h3>
                Resultados para o CEP 16075-420:
            </h3>
            {elements}
            <br />

            <button className="App-button">CANCELAR</button>
        </>
    );
}

export default Resultados;

