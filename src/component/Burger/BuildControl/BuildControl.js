import React from 'react';
import Control from './Control';
import Button from './../../common/Button/Button'
import './BuildControl.css';

const controls = [
    { label : 'CHEESE', type : 'cheese' },
    { label : 'MEAT', type : 'meat' },
    { label : 'BACON', type : 'bacon' },
    { label : 'SALAD', type : 'salad' }
];

const BuildControl = (props) => {
    return(
        <div className = "ContainerStyle">
            <p className='totalCostContainer'>Total Cost : {props.cost}</p>
            {controls.map((ctrl, index) => {
                return(
                    <Control
                        key = {index}
                        label = {ctrl.label}
                        add = {() => props.addIng(ctrl.type)}
                        remove = {() => props.remIng(ctrl.type)}
                        disabled = {props.disabled[ctrl.type]}
                    />  
                );
            })}
            <Button additionalClass = "proceedBtn" disabled = {!props.purchasable} clickListener = {props.showOrderSummary}>PROCEED TO CHECKOUT</Button>
        </div>
    );
}
export default BuildControl;