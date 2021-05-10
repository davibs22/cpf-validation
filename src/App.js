import CardCPF from './card.svg';
import './App.css';
import React from 'react';
import Button from './components/Button';
import InputMask from "react-input-mask";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="CPF-Card">
          <img src={CardCPF} alt="Card CPF" draggable="false"/>
        </div>
        <label className="Card-Number">000.000.000-00</label>
        <InputMask type="cpf" className="CPF-Input" placeholder="000.000.000-00" mask="999.999.999-99"></InputMask>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
