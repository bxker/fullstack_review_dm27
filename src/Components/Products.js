import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deleteProducts} from '../redux/reducers/productReducer'
import {Link} from 'react-router-dom'


class Products extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }


    render() {
        return (
            <div key={this.props.product.product_id} style={{border: '1px solid black', maxWidth: '50%'}}>
                <h2>{this.props.product.product_name}</h2>
                <h3>{this.props.product.product_price}</h3>
                <img src={this.props.product.product_img} style={{maxWidth: '100px'}}></img>
                <h3>{this.props.product.product_description}</h3>

                {this.props.is_Admin === true ? 
                <div>
                    <Link to={`/edit/${this.props.product.product_id}`}><button>Edit</button></Link>
                    <button onClick={() => this.props.deleteProducts(this.props.product.product_id)}>Delete</button>
                </div>
                : <button>Add to cart</button>}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        user_id: reduxState.userReducer.user_id,
        is_Admin: reduxState.userReducer.is_Admin
    }
}

export default connect(mapStateToProps, {
    deleteProducts
})(Products)