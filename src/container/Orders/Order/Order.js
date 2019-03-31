import React from 'react';
import Burger from '../../../component/Burger/Burger';
import './Order.css';

const Order = (props) => {
    const ingredientData = props.ingredients;
    const burgerStyle = {
        'height': '180px',
        'overflow': 'auto'
    };

    const ingredientDetails = Object.keys(ingredientData).map((ing, index) => <div key = {index}>{ing}</div>);
    const ingredientQty = Object.keys(ingredientData).map((ing, index) => <div key = {index}>{ingredientData[ing]}</div>);
    return (
        <div className = "order-sub-container">
            <div className = "col col-1">
                <Burger ingredients = {ingredientData} burgerStyle = {burgerStyle} />
            </div>
            <div className = "col col-2">
                {ingredientDetails}
            </div>
            <div className = "col col-3">
                {ingredientQty}            
            </div>
            <div className = "col col-4">
                <div>Rs {props.price}</div>
            </div>
        </div>
    );
};

export default Order;