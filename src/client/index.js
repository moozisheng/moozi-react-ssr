import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from '../App';

//注水
const Page = <BrowserRouter>
    {App}
</BrowserRouter>
ReactDom.hydrate(Page, document.getElementById('root'))