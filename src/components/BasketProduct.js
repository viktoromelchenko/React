import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteProduct} from '../redux/Actions'

export default ({productBask}) => {


  let dispatchDelete = useDispatch()

  function deleteP() {
    dispatchDelete(deleteProduct(productBask))
  }


  return <div className="card m-2">
  <div className="card-body">
  <h5 className="card-title">{productBask.name}</h5>
    <p className="card-text">{ productBask.price } { productBask.currency }</p>
    <button 
      className="btn btn-danger"
      onClick={ deleteP }
    >Delete Product</button>
    </div>
</div>

}