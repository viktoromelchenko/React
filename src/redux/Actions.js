import { ADD_PRODUCT } from "./Types";
import { DELETE_PRODUCT } from "./Types";

export function addProduct (product) {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export function deleteProduct (productBask) {
    console.log(productBask)
    return {
        type: DELETE_PRODUCT,
        payload: productBask
    }
}
