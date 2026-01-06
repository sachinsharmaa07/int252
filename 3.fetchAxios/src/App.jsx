import {useState,useEffect} from 'react'
import React from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const[usrs,setUsrs]=useState([]);
  useEffect(()=>{
    fetch('https://69302960778bbf9e00701866.mockapi.io/users').then((response)=>response.json()).then(
      (data)=>setUsrs(data)
    )
  }, [])
  const[usrs2,setUsrs2]=useState([]);
  useEffect(()=>{
    axios.get('https://69302960778bbf9e00701866.mockapi.io/users').then((response)=>setUsrs2(response.data));
  }, [])
  return (
    <>
    <h1>Users List </h1>
   <ul>
    {
      usrs2.map((usr)=>(
        <li key={usr.id}>{usr.name} - {usr.email}</li>
      ))
    }

   </ul>
    </>
  )
}

export default App
