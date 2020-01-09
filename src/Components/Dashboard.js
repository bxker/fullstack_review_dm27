import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logout} from '../redux/reducers/userReducer'
import {getProducts} from '../redux/reducers/productReducer'
import { Redirect, Link } from 'react-router-dom'
import Products from './Products'

class Dashboard extends Component {


    componentDidMount(){
        this.props.getProducts()
    }

    render() {
        if(!this.props.user_id){
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div>
                <section>
                    <h1>Dashboard</h1>
                    <button onClick={this.props.logout}>Logout</button>
                </section>
                <section>
                    {this.props.is_Admin === true ? 
                        <Link to="/add">Add Product</Link>
                    :null
                    }
                    {this.props.products ? this.props.products.map(product => {
                        return (
                            <Products product={product}/>
                        )
                    })
                    : null
                    }
                </section>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id,
        products: reduxState.productReducer.products,
        is_Admin: reduxState.userReducer.is_Admin
    }
}

export default connect(mapStateToProps, {
    logout,
    getProducts
})(Dashboard)

