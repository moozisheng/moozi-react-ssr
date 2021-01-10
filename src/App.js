import React from 'react';

function App(props) {
    return <h1>hello {props.title}</h1>
}

export default <App title="React SSR" />;