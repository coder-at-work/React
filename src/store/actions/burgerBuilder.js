import * as actionTypes from './actionTypes';
import axiosInstance from '../../axios-instance';

export const addIngredients = (ingName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingName
    };
}

export const removeIngredients = (ingName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName
    };
}

const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
}

export const toggleLoader = () => {
    return {
        type: actionTypes.TOGGLE_LOADER
    };
}

export const resetToDefault = () => {
    return {
        type: actionTypes.RESET_TO_DEFAULT
    };
}

export const fetchIngredients = () => {
    return dispatch => {
        dispatch(toggleLoader());
        axiosInstance.get('/ingredients.json')
            .then(response => {
                if(response.status === 200) {
                    dispatch(toggleLoader());
                    dispatch(setIngredients(response.data));
                }
            })
            .catch(error => {
                dispatch(toggleLoader());
            });
    }
}