import React, { useState } from 'react'

const ChangeName = () => {
    const [myName, setMyName]=useState('true');
    const changeName= ()=>{
        setMyName('Bajrang');
    }
  return (
    <div>
    <h1>useState Hook Example 1</h1>
    <h2> my name is {myName? "bajrang":"unknown"} </h2>
    <button onClick={()=>setMyName(!myName)}>Click me</button>
    
    </div>
  )
}

export default ChangeName