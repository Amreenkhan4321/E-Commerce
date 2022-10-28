import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ListItem from './ListItem'

function ListGroup() {

    const [products , setProducts] = useState([])

    const getData = async()=>{
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
    }

useEffect(()=>{
    getData()

},[])

  return (
    <ul className="cards">
{
    products.map((product)=>
    <ListItem key={product.id} product={product} />
)
}
      </ul>
  )
}

export default ListGroup