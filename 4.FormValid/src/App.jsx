import { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [err, setError] = useState("");
  const [stat, setStat] = useState(false);
  
  const handleClick = () => {
    if(name == "" || email == "") {
      setError("Fields cannot be empty");
      setStat(false)
    }
    else {
      setError("");
      setStat(true)
    }
  }

  return (
    <>
      <input type="text" placeholder='Name' onChange={(e) => {
        setName(e.target.value)
      }}></input>
      <input type="text" placeholder='Email' onChange={(e) => {
        setEmail(e.target.value)
      }}></input>
      <button onClick={handleClick}>Submit</button>
      {err && <h1>{err}</h1>}
      {stat && (
        <>
          <h1>{name}</h1>
          <h1>{email}</h1>
        </>
      )}
    </>
  )
}

export default App
