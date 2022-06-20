import React, { useState } from 'react'

const ChangeNumber = () => {
    const [number, setNumber]= useState(0);

const add=()=>{
    setNumber(number + 1);
}
const substract=()=>{
    setNumber(number - 1);
}
  return (
    <div>
    <h1>Usestate example 2</h1>
    <button onClick={add}>ADD</button>
    <h3>{number}</h3>
    <button onClick={substract}>Substract</button>
    </div>
  )
}

export default ChangeNumber