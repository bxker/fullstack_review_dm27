import axios from 'axios'

//initial state
const initalState = {
    products: []
}

//const strings
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const DELETE_PRODUCTS = 'DELETE_PRODUCTS'
export const ADD_PRODUCTS = 'ADD_PRODUCTS'
export const EDIT_PRODUCTS = 'EDIT_PRODUCTS'

//functions
export function getProducts(){
    return {
        type: GET_PRODUCTS,
        payload: axios.get('/api/products')
    }
}

export function deleteProducts(product_id){
    return {
        type: DELETE_PRODUCTS,
        payload: axios.delete(`/admin/delete/${product_id}`)
    }
}

export function addProducts(product){
    return {
        type: ADD_PRODUCTS,
        payload: axios.post('/admin/add', product)
    }
}

export function editProducts(product, product_id){
    return {
        type: EDIT_PRODUCTS,
        payload: axios.put(`/admin/edit/${product_id}`, product)
    }
}

//reducer
export default function reducer(state = initalState, action){
    const {type, payload} = action
    switch(type){
        case `${GET_PRODUCTS}_FULFILLED`:
            return {
                ...state,
                products: payload.data
            }
        case `${DELETE_PRODUCTS}_FULFILLED`:
            return{
                ...state,
                products: payload.data
            }

        case `${ADD_PRODUCTS}_FULFILLED`:
            return{
                ...state,
                products: payload.data
            }

        case `${EDIT_PRODUCTS}_FULFILLED`:
            return{
                ...state,
                products: payload.data
            }
        default: return state
    }
}