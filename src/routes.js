import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'


export default (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
    </Switch>
)