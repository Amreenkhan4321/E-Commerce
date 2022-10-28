import React from 'react'
import CartItem from '../components/CartItem'
import {useSelector} from 'react-redux'

function CartPage() {

    const cart = useSelector ((state)=>state.cart)

  return (
    <div className="container">
      <h1>Cart</h1>
        <ul className="list-group mt-5">
{
    cart.map((item)=>
    <CartItem key={item.id} item={item}/>
    )
}

    </ul>
    </div>
  )
}

export default CartPage