import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer'



const rootReducer = combineReducers({
    userReducer,
    productReducer
});

export default createStore(rootReducer, applyMiddleware(promise))
