import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import Add from './Components/Add'
import Edit from './Components/Edit'


export default (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/add" component={Add} />
        <Route path="/edit/:product_id" component={Edit} />
    </Switch>
)