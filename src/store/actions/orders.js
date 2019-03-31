import * as actionTypes from './actionTypes';
import { toggleLoader } from './burgerBuilder';
import axiosInstance from '../../axios-instance';

const setOrders = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS,
        orders
    };
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(toggleLoader());
        axiosInstance.get('/orders.json')
            .then(response => {
                if(response.status === 200) {
                    dispatch(toggleLoader());
                    dispatch(setOrders(response.data));
                }
            })
            .catch(error => {
                dispatch(toggleLoader());
            });
    }
}