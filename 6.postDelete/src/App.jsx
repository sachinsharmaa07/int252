import { useState } from "react";
import React from "react";
function App() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[userId,setUserId]=useState("");
  
  function handleSubmit(e){
    e.preventDefault();
    fetch("https://69302960778bbf9e00701866.mockapi.io/users", {
      method: "post",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => response.json())
    .then((data) => {
      alert("submitted");
      setUserId(data.id);
    })
    .catch(error => console.error("Error:", error));
  }

  function handleDelete(e){
    e.preventDefault();
    if(!userId) return alert("Enter a user ID to delete");
    fetch(`https://69302960778bbf9e00701866.mockapi.io/users/${userId}`,{
      method:"DELETE"
    }).then(()=>{
      alert("deleted");
    }).catch((err)=>alert("Error: " + err))
  }

  function handleUpdate(e){
    e.preventDefault();
    if(!userId) return alert("Enter a user ID to update");
    fetch(`https://69302960778bbf9e00701866.mockapi.io/users/${userId}`, {
      method:"PUT",
      headers:{
        "content-Type":"application/json"
      },
      body: JSON.stringify({
        name:name,
        email:email
      })
    }).then((response)=>response.json()).then(()=>alert("updated"));
  }

  return (
    <>
     <input placeholder="Enter User ID" type="text" onChange={(e)=>{
      setUserId(e.target.value)
     }}></input>
     <input placeholder="Enter Name" type="text" onChange={(e)=>{
      setName(e.target.value)
     }}></input>
     <input placeholder="Enter Email" type="text" onChange={(e)=>{
      setEmail(e.target.value)
     }}></input>
     <button onClick={handleSubmit}> Submit</button>
     <button onClick={handleDelete}> Delete</button>
     <button onClick={handleUpdate}> Update</button>
    </>
  )
}

export default App
