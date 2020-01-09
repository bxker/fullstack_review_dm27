import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getUser, login} from '../redux/reducers/userReducer'
import {Redirect, Link} from 'react-router-dom'
import '../styles/Login.css'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
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

    render() {
        if(this.props.user_id){
            return(
                <Redirect to="/dashboard" />
            )
        }
        return (
            <div>
                <h1>Login</h1>
                <h2>{this.props.user_id}</h2>
                <input placeholder="username" name="username" onChange={this.handleUserInput}></input>
                <input placeholder="password" name="password" onChange={this.handleUserInput}></input>
                <button className="login_button" onClick={() => this.props.login(this.state.username, this.state.password)}>Login</button>
                <Link to="/register"><h3>Don't have an account? Register here!</h3></Link>
                <button className="random_button">ALSDKJASLDJK</button>
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
    login
})(Login)

