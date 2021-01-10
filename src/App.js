import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default (
    <div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
    </div>
)