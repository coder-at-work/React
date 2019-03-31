import React from 'react';
import Aux from '../../hoc/Aux';
import Button from './../../common/Button/Button';
import './../../common/Button/Button.css';
import './OrderSummary.css'

const OrderSummary = (props) => {
    let ingredientChart = null;
    ingredientChart = Object.keys(props.ingredients).map((ing, index) => {
        return(
            // <li key = {index}><span style = {{'textTransform': 'capitalize'}}>{ing}</span></li>
            <li key = {index}>
                <div className = "ingredient-detail">
                    <div className = "ingredient-type">{ing}</div>
                    <div className = "ingredient-qty">Qty: <span>{props.ingredients[ing]}</span></div>
                </div>
                <div className = "ingredient-price">
                    {props.prices[ing]*props.ingredients[ing]} Rs
                </div>
            </li>
        );
    });
    return(
        <Aux>
            <div className = 'os-title'>
                Your Order Summary
            </div>
            <div className = 'os-body'>
                <div>Your mouth-watering burger has the following ingredients : </div>
                <ul>{ingredientChart}</ul>
            </div>
            <div className = "total-price-container">
                <div className = "price-text">Total Price</div>
                <div className = "amount">{props.totalPrice} Rs</div>
            </div>
            <div className = 'os-title' style = {{textAlign: 'left', padding: '15px 30px'}}>
                <div>Proceed to Checkout</div>
                <div className = "BtnContainerStyle" style = {{display: 'flex'}}>
                    <Button additionalClass = "add tinyBtn" clickListener = {props.proceedBtnHandler}>Proceed</Button>
                    <Button additionalClass = "remove tinyBtn" clickListener = {props.cancelBtnHandler} disabled = {props.disabled}>Cancel</Button>
                </div>
            </div>

        </Aux>
    );
};

export default OrderSummary;