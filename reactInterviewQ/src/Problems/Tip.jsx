import React from 'react'

function Tip({ tip }) {
    return (
        <div style={{ backgroundColor: "rgb(255 120 9)", border: "3px solid black", color: "black", padding: "5px", borderRadius: "20px" }}>
            <p>Tip:</p>
            <p>{tip}</p>
        </div>
    )
}

export default Tip