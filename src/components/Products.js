import React from 'react'
import {connect} from 'react-redux'
import Product from './Product' 

const Products = ({syncProducts}) => {
    if(!syncProducts.length) {
        return <p className="text-center">No Products</p>
        }
    return syncProducts.map( product => <Product product={product} key={product.id}/>)
}

const mapStateToProps = state => {
    return {
        syncProducts: state.products
    }
}


export default connect (mapStateToProps,null)(Products)