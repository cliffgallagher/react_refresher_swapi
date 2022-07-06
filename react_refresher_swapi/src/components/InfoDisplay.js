import React from 'react';

const InfoDisplay = (props) => {
    return (
        <div>
            Name: {props.results.name}
            Height: {props.results.height}
        </div>
    )
}

export default InfoDisplay;