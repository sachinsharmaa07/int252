import { useState } from 'react'
import React from 'react';

function App() {
  const [inp, setInp] = useState("");
  const handleChange=(e)=>{
    setInp(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange} placeholder="Enter input" />
      <h1>Your input is : {inp}</h1>
    </>
  )
}
export default App
