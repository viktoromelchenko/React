import React from 'react'
import { useDispatch } from 'react-redux'
import {addProduct} from '../redux/Actions'


export default ({product}) => {
    
      const dispatch = useDispatch() 

      

      function add (){
        const newProduct = {
          id: product.id + Date.now(),
          name:  product.name,
          price: product.price,
          currency: product.currency,
          data: new Date()
        }
        dispatch(addProduct(newProduct))
      }
       
    return <div className="card m-2">
    <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{ product.price } { product.currency }</p>
      <button 
        className="btn btn-success"
        onClick={add}
      >Buy Product</button>
    </div>
  </div>

  }

  
  

 