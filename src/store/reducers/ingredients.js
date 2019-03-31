import * as actionTypes from '../actions/actionTypes';
import { INGREDIENT_PRICES } from '../../component/Burger/Constants';

const basePrice = 100;
const initialState = {
    ingredients: null,
    totalPrice: basePrice,
    purchasable: false,
    loader: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                purchasable: true,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1 
                }
            };
        case actionTypes.REMOVE_INGREDIENT:
            const mutatedIngredients = {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            };
            const total = Object.keys(mutatedIngredients).reduce((sum, key) => mutatedIngredients[key] + sum, 0);
            return {
                ...state,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                purchasable: (total > 0),
                ingredients: mutatedIngredients
            };
        case actionTypes.SET_INGREDIENTS: 
            return {
                ...state,
                ingredients: action.ingredients
            };
        case actionTypes.TOGGLE_LOADER:
            return {
                ...state,
                loader: !state.loader
            };
        case actionTypes.RESET_TO_DEFAULT:
            return {
                ...state,
                totalPrice: basePrice,
                purchasable: false
            };
        default:
            return state;
    }
};

export default reducer;