// import React, { useState } from 'react'

// const ChangeTextForm = () => {
//     const [text, setText]= useState("");


//   return (
//     <div>
//     <h1>useState hook example 3</h1>
// <input type="text" placeholder='Enter Something here ' value={text} onChange={(e)=>setText(e.target.value)} />    
//     <h3> Welcome back {text}</h3>
//     </div>
//   );
// }

// export default ChangeTextForm


import React, { useState } from 'react'

const ChangeTextForm = () => {
    const [text, setText]= useState("");
let onChange=(event)=>{
const newValue=event.target.value;
setText(newValue);
};


    return (
      <div>
      <h1>useState hook example 3</h1>
  <input type="text" placeholder='Enter Something here ' value={text} onChange={onChange} />    
      <h3> Welcome back {text}</h3>
      </div>
    );
  }
  
  export default ChangeTextForm