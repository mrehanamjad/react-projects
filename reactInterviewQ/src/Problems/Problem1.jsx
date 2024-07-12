import React, { useState } from 'react'
import WatchVideo from '../Components/WatchVideo'
import Tip from './Tip'


function Problem1() {
    const [val, setVal] = useState(1)
    const [multipliedVal, setMultipliedVal] = useState(1)

    const multiplyResult = () => {
        setMultipliedVal(val * 5)
        setVal(val + 1)
    }
    return (
        <div>
            <div>
                <h1>Main Value: {val}</h1>
                <button onClick={multiplyResult}>Multiply By 5</button>
                <h2>Result: {multipliedVal}</h2>

                <Tip tip={"Whenever State/UI updates in react, the whole component remound,rerander"}/>
            </div>
            <WatchVideo embedCode={<iframe width="560" height="315" src="https://www.youtube.com/embed/P4X0vPTQX4A?si=6v2Y_rDjWbnsfNX5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} />

        </div>
    )
}

export default Problem1