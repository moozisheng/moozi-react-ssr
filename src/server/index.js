import { renderToString } from 'react-dom/server';
import React from 'react';
import express from 'express';
import App from '../App.js'

const app = new express();

app.get('/', (req, res) => {
    const  Page = <App title="React SSR"/>
    const content = renderToString(Page);
    res.send(
        `
            <html>
                <head>
                    <meta charset='utf-8'/>
                    <title> react ssr </title>
                </head>
                <body>
                    <div id="root">${content}</div>
                </body>
            </html>
        `
    )
})

app.listen(9093, () => {
    console.log('端口监听完毕')
})