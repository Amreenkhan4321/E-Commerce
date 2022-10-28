import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

function CartItem({item}) {
    const {title , image , price ,id} = item

    const dispatch = useDispatch()

    const handleRemove = (item) =>{
      dispatch(remove(item))
    }

  return (
    <li className="list-group-item px-2  d-flex justify-content-between align-items-center ">
    <img className="m-4" src={image} alt=""/>
    <span className="p-2">
        <h4>{title}</h4>
        <span className="d-flex justify-content-between align-items-center">
            <h4 className="">{price}</h4> 
            <button className="btn btn-danger btn-sm rounded-0" onClick={() => handleRemove(item)}>Remove</button>
        </span>
    </span>
</li>
  )
}

export default CartItem