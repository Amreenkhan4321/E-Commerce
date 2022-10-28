import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'


function ElectronicItem({electronic}) {

    const {image , price , title} = electronic

    const dispatch = useDispatch()

    const handleAdd = (electronic) =>{
        dispatch(add(electronic))
    }


  return (
    <li>
    <a  className="card w-100">
      <img src={image} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div className="card__header-text">
            <h3 className="card__title">{title}</h3>            
            <span className="card__status">Price :{price}</span>
          </div>
          <button className="btn btn-danger w-100" onClick={()=>handleAdd(electronic)} >Add to cart</button>
        </div>
      </div>
    </a>      
  </li>
  )
}

export default ElectronicItem