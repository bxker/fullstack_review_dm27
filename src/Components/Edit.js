import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editProducts} from '../redux/reducers/productReducer'

class Edit extends Component {
    constructor(){
        super()
        this.state ={
            product_name: '',
            product_img: '',
            product_price: 0,
            product_description: ''
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let product = {
            product_name: this.state.product_name,
            product_img: this.state.product_img,
            product_price: this.state.product_price,
            product_description: this.state.product_description
        }
        return (
            <div>
                <h1>Editing {this.props.match.params.product_id}</h1>
                <input name="product_name" placeholder="Product Name" onChange={this.handleInputChange}/>
                <input name="product_img" placeholder="Product Image" onChange={this.handleInputChange}/>
                <input name="product_price" placeholder="Product Price" onChange={this.handleInputChange}/>
                <input name="product_description" placeholder="Product Description" onChange={this.handleInputChange}/>
                <button onClick={() => this.props.editProducts(product, this.props.match.params.product_id)}>Edit information</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    editProducts
})(Edit)


