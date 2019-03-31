import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: null,
    loader: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_ORDERS:
            return {
                ...state,
                orders: action.orders
            };
        case actionTypes.TOGGLE_LOADER:
            return {
                ...state,
                loader: !state.loader
            };
        default:
            return state;
    }
};

export default reducer;