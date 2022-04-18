import React from 'react';

const ArrowContainer = (props) => {
    return (
        <div className="arrowContainer">
            <div className={props.arrowDir}></div>
        </div>
    )
}

export default ArrowContainer;