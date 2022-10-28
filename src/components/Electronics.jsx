import React, { useEffect, useState } from 'react'
import ElectronicItem from './ElectronicItem'

function Electronics() {

    const [electronics , setElectronics] = useState([])

    const getElectronics = async () =>{
        const res = await fetch('https://fakestoreapi.com/products/category/electronics')
        const data = await res.json()

        setElectronics(data)
    }

    useEffect(()=>{
        getElectronics()
    },[])


    
  return (
    
      <ul className="cards">
     {
    electronics.map((electronic)=>
    <ElectronicItem key={electronic.id} electronic={electronic} />
     )
    }
      </ul>
    
  )
}

export default Electronics