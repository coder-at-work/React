import React from 'react';
import Button from './../../common/Button/Button'
import './Control.css';

const Control = (props) => {
    return(
        <div className = "IngContainerStyle">
            <p className = "labelStyle">{props.label}</p>
            <div className = "BtnContainerStyle">
                <Button additionalClass = "add" clickListener = {props.add}>ADD</Button>
                <Button additionalClass = "remove" clickListener = {props.remove} disabled = {props.disabled}>REMOVE</Button>
            </div>
        </div>
    );
};

export default Control;