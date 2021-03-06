import axios from 'axios'

//initial state
const initalState = {
    user_id: null,
    username: '',
    is_Admin: false
}

//const strings
export const GET_USER = 'GET_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const REGISTER_USER = 'REGISTER_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

//functions
export function getUser(){
    return {
        type: GET_USER,
        payload: axios.get('/auth/user')
    }
}

export function login(username, password){
    const user = {
        username,
        password
    }
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', user)
    }
}

export function register(username, password, is_Admin){
    const user = {
        username,
        password,
        is_Admin
    }
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', user)
    }
}

export function logout(){
    return {
        type: LOGOUT_USER,
        payload: axios.post('/auth/logout')
    }
}

//reducer
export default function reducer(state = initalState, action){
    const {type, payload} = action
    switch(type){
        case `${GET_USER}_FULFILLED`:
            return {
                ...state,
                user_id: payload.data.user_id,
                username: payload.data.username,
                is_Admin: payload.data.is_Admin
            }
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                user_id: payload.data.user_id,
                username: payload.data.username,
                is_Admin: payload.data.is_Admin
            }
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                user_id: payload.data.user_id,
                username: payload.data.username,
                is_Admin: payload.data.is_Admin
            }
        case `${LOGOUT_USER}_FULFILLED`:
            return {
                ...state,
                user_id: null,
                username: '',
                is_Admin: false
            }
        default: return state
    }
}