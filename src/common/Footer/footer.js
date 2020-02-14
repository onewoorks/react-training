import React from 'react'

const current_date = new Date().toDateString()

const footer = (props) => {
        return (
            <div style={{textAlign:'center'}}>
                <hr />
                <div >{`${props.children}`} - {current_date}</div>
            </div>
        )
    
}

export default footer