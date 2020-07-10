import React from 'react'
import { connect } from 'react-redux'
import BasketProduct from './BasketProduct'

const Basket = ({syncBasket}) => {
    if(!syncBasket.length) {
        return <p className="text-center">No Products</p>
        }
    return syncBasket.map( productBask => <BasketProduct productBask={productBask} key={productBask.id}/>)
}

const mapStateToProps = state => {
    return {
        syncBasket: state.basket
    }
}


export default connect (mapStateToProps,null)(Basket)