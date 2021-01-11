import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Header from '../component/Header'
import { getIndexList } from '../store/index'

function Home(props) {
    const [count, setCount] = useState(1);

    useEffect(() => {
        props.getIndexList()
    }, [])

    return <div>
        <Header />
        <h1>hello React SSR</h1>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>累加</button>
        <hr />
        <ul>
            {
                props.list.map(item => (<li key={item.id}>{item.name}</li>))
            }
        </ul>
    </div>
        
}

export default connect(
    state => ({
        list: state.index.list
    }),
    {
        getIndexList
    }
)(Home);