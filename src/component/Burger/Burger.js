import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const Burger = (props) => {
    let completeIngredient = [];
    Object.keys(props.ingredients).map(ingredient => {
        let num = props.ingredients[ingredient];
        for(let index = 0; index < num; index++) {
            completeIngredient.push(<BurgerIngredient key = {ingredient + index} type = {ingredient} />);
        }
        return(completeIngredient);
    });

    if(completeIngredient.length === 0) {
        completeIngredient.push(<p className = "emptyIngStyle">Please start adding ingredients</p>);
    }
    return(
        <div style = {props.burgerStyle}>
            <BurgerIngredient type = 'bread-top' />
            {completeIngredient}      
            <BurgerIngredient type = 'bread-bottom' />
        </div>
    );
};

export default Burger;