import React from 'react'
import '../App.css'

function WatchVideo({ embedCode }) {
    return (
        <div>
            {/* <h1>---------------------------</h1> */}
            <div style={{border:"4px dashed",width:"80%",margin:"4rem auto"}}></div>
            <h2>Watch Solution Tutorial: </h2>
           {embedCode}
        </div>
    )
}

export default WatchVideo