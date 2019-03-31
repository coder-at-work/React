import React from 'react';
import Burger from '../../component/Burger/Burger';
import Button from '../../component/common/Button/Button';
import './Checkout.css';

const CheckoutPage = (props) => { 
    const burgerStyle = {
        'height': '300px',
        'overflow': 'auto',
        'margin-top': '30px'
    };
    return(
        <div className = "CheckoutPage" >
            <Burger ingredients = {props.ingredients} burgerStyle = {burgerStyle} />
            <div className = "BtnContainerStyle" style = {{display: 'flex'}}>
                <Button additionalClass = "add tinyBtn" clickListener = {props.proceedBtnHandler} disabled = {props.disabled}>Proceed</Button>
                <Button additionalClass = "remove tinyBtn" clickListener = {props.cancelBtnHandler}>Cancel</Button>
            </div>

        </div>
    );
};

export default CheckoutPage;