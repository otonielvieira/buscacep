import { useState } from "react";
import consultarCep from 'cep-promise';

function mascaraInput(str) {
  return str.replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

function Pesquisa(props) {
  const goTo = props.goTo
  const ticket = props.ticket
  const setResultado = props.setResultado;
  const [cepNumber, setCepNumber] = useState("");
  const setErrorMessage = props.setErrorMessage;

  function handelChange(evt) {
    const value = evt.target.value
    setCepNumber(mascaraInput(value));
  }
  /*
  function clear(){
    setCepNumber("");
  }
  */

  function handleSuccess(dadosCep) {
    const resultado = {
      "ESTADO": dadosCep.state,
      "CIDADE": dadosCep.city,
      "BAIRRO": dadosCep.neighborhood,
      "RUA": dadosCep.street,

    }
    setResultado(resultado)
    goTo("RESULTADOS");
  }

  function handleError(err) {
    const errorMessage = err.message;
    setErrorMessage(errorMessage);
    goTo("ERRO");
  }

  function handleSearch() {
    ticket.current++;
    const currentTicket = ticket.current;
    goTo("CARREGANDO")
    consultarCep(cepNumber)
      .then(result => currentTicket === ticket.current && handleSuccess(result))
      .catch(err => currentTicket === ticket.current && handleError(err))
  }
  return (
    <>

      <h2>BUSCA CEP</h2>
      <span>
        Digite o<code> CEP</code> que você deseja consultar:
      </span>


      <input value={mascaraInput(cepNumber)} onChange={handelChange} className="App-input" />

      <button onClick={handleSearch} className="App-button">CONSULTAR</button>
      <br />
      <h6>Desenvolvido por Otto Vieira - Curso Eureka - React Básico</h6>


    </>
  );
}

export default Pesquisa;