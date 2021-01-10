import React, { useState } from 'react';
import Header from '../component/Header'

function Home(props) {
    const [count, setCount] = useState(1);

    return <div>
        <Header />
        <h1>hello React SSR</h1>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>累加</button>
    </div>
        
}

export default Home;