import React from 'react';
import './Backdrop.css' ;

const Backdrop = (props) => {
    return(
        props.showOrderSummary ? <div className = "Backdrop" onClick = {props.closed}></div> : null
    );
};

export default Backdrop;