import { useState } from "react";

function mascaraInput(str){
  return str.replace(/\D/g, '')
  .replace(/(\d{5})(\d)/, '$1-$2')
  .replace(/(-\d{3})\d+?$/, '$1')
}

function Pesquisa(props) {
  const goTo = props.goTo
  const [cepNumber, setCepNumber] = useState("");

  function handelChange(evt){
    const value = evt.target.value
    setCepNumber(mascaraInput(value));
  }

  function clear(){
    setCepNumber("");
  }
    return (
      <>
     
          <h1>BUSCA CEP</h1>
          <p>
            QuaL<code> CEP</code> você deseja consultar ?
          </p>
          <p>Estado atual: {cepNumber}</p>

          <input value={mascaraInput(cepNumber)} onChange={handelChange} className="App-input" />

          <button  onClick={()=> goTo("RESULTADOS")} className="App-button">CONSULTAR</button>
          <button onClick={clear}>Limpar state</button>
       
      </>
    );
  }

  export default Pesquisa;