import CardCPF from './card.svg';
import './App.css';
import Button from '../components/Button';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="CPF-Card">
          <img src={CardCPF} alt="Card CPF" draggable="false"/>
        </div>
        <label className="Card-Number">000.000.000-00</label>
        <input type="cpf" className="CPF-Input" placeholder="000.000.000-00" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"></input>
        <button className="Validation-Btn">Validar</button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
