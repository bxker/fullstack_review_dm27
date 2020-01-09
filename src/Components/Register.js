import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getUser, register} from '../redux/reducers/userReducer'
import {Redirect, Link} from 'react-router-dom'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            is_Admin: false
        }
    }

    componentDidMount(){
        this.props.getUser()
    }

    handleUserInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleBoxClick = (e) => {
        console.log(e.target.checked)
        if(e.target.checked === true){
            this.setState({is_Admin: true})
        }else{
            this.setState({is_Admin: false})
        }
    }

    render() {
        console.log(this.state.is_Admin)
        if(this.props.user_id){
            return(
                <Redirect to="/dashboard" />
            )
        }
        return (
            <div>
                <h1>Register</h1>
                <h2>{this.props.user_id}</h2>
                <input placeholder="username" name="username" onChange={this.handleUserInput}></input>
                <input placeholder="password" name="password" onChange={this.handleUserInput}></input>
                <input type="checkbox" onChange={this.handleBoxClick}/>
                <h4>Is Admin?</h4>
                <button onClick={() => this.props.register(this.state.username, this.state.password, this.state.is_Admin)}>Login</button>
                <Link to="/register"><h3>Don't have an account? Register here!</h3></Link>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    getUser,
    register
})(Register)
