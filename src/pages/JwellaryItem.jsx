import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'


function JwellaryItem({jwellari}) {

  const{image , price , title} = jwellari

  
  const dispatch = useDispatch()

  const handleadd = (jwellari) =>{
      dispatch(add(jwellari))
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
            <span className="card__status">Price : {price} </span>
          </div>
          <button className="btn btn-danger w-100" onClick={()=>handleadd(jwellari)} >Add to cart</button>
        </div>
      </div>
    </a>      
  </li>  )
}

export default JwellaryItem