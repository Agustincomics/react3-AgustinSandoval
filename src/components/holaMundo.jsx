import React from 'react';
import {useState} from "react";

function HolaMundo() {
//aqui defino mis state
let [frase, setFrase] = useState("");
// el state frase solo se modifica con la funcion setNumero, setNumero(3)

  return (
    <div>
        <h3>Hello my friend {frase}</h3>
        <button className='btn btn-primary' onClick={()=> setFrase(frase="(from changed state)")}>Click me</button>
    </div>
  );
}

export default HolaMundo