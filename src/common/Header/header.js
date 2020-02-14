import React from 'react'


const header = (props) => {
    return(
        <div style={props.style}>
            <h2>{props.children}</h2>
            <hr/>
        </div>
    )
}

export default header