import React, { useEffect, useState } from 'react'
import JwellaryItem from '../pages/JwellaryItem'

function Jwellary() {

  const [jwellaries , setJwellaries]=useState([])

  const getJwellary = async ()=>{
    const res =  await fetch ("https://fakestoreapi.com/products/category/jewelery")
    const data = await res.json()
    setJwellaries(data)
  }

  useEffect(()=>{
    getJwellary()
  },[])

  
  return (
    <div className="container">
      
<ul className="cards">
{
  jwellaries.map((jwellari)=>
  <JwellaryItem key={jwellari.id} jwellari={jwellari}/>

  )
} 
      </ul>
    </div>



  )
}

export default Jwellary