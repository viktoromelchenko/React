import React from 'react'
import { connect } from 'react-redux'

const Total = ({syncBasket}) => {
    return ( 
            <h1>
                {syncBasket.reduce(function(sum,product){
                    return sum+product.price
                },0)}
            </h1>
            )
            
}

const mapStateToProps = state => {
    return {
        syncBasket: state.basket
    }
}

export default connect (mapStateToProps,null)(Total)