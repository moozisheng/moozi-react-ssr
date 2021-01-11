import { renderToString } from 'react-dom/server';
import React from 'react';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store'
import App from '../App.js';

const app = express();
app.use(express.static('publish'))


// 监听所有路由
app.get('*', (req, res) => {

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={ req.url }>
                {App}
        </StaticRouter>
        </Provider>
        
    );
    res.send(
        `
            <html>
                <head>
                    <meta charset='utf-8'/>
                    <title> react ssr </title>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script src="/bundle.js"></script>
                </body>
            </html>
        `
    )
})

app.listen(9093, () => {
    console.log('端口监听完毕')
})
