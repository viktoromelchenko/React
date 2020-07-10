import {ADD_PRODUCT} from './Types'
import {DELETE_PRODUCT} from './Types'

const initialState = {
    products: [
		{id:1, name: "Jogurd", price: 12, currency: "USD", date: new Date()},
		{id:2, name: "“French fries”", price: 3, currency: "USD", date: new Date()},
		{id:3, name: "Beer", price: 6, currency: "USD", date: new Date()},
		{id:4, name: "Sweets", price: 2.5, currency: "USD", date: new Date()}],
    basket: []
    
}
export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT:
            return {...state, basket: state.basket.concat(action.payload) }
        case DELETE_PRODUCT:
            return {...state, basket: state.basket.filter( (elem) => elem !== action.payload)}
        default: return state
    }
}