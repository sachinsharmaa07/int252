import { useState } from 'react'

import './App.css'

function App() {
 const [count,setCount]=useState(0);
 const hI=()=>{
  setCount(count+1)
 }
 const hD=()=>{
  setCount(count-1)
 }

  return (
    <>
      <h1>the count is : {count}</h1>
      <button onClick={hD} >--</button>
      <button onClick={hI}>++</button>
    </>
  )
}

export default App
