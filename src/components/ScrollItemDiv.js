import React from 'react';

const ScollItemDiv = (props) => {
    return (
        <div className="scrollItemDiv" style={{backgroundColor: `${props.colour}`}}>
            <p className="scrollItemPara" >{props.colour}</p>
        </div>
    )
}

export default ScollItemDiv;