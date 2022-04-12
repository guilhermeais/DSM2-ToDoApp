import React from 'react';
import {  Router, Route, Redirect, hashHistory } from 'react-router';

import Todo from '../todo/todo';
import About from '../about/about'
import Register from '../register'

export default props => {
    return (
      <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path="/register" component={Register} ></Route>
        <Route path="/about" component={About} ></Route>
        

        <Redirect from='*' to='/todos' />
      </Router>
    )
}