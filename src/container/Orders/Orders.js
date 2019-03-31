import React, { Component } from 'react';
import Toolbar from '../../component/Toolbar/Toolbar';
import Order from './Order/Order';
import { connect } from 'react-redux';
import Spinner from '../../component/common/Spinner/Spinner';
import * as actionTypes from '../../store/actions/index';
import './Orders.css';

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrderHistory();
    }
    render() {
        const tableHeaders = ['Image', 'Ingredients', 'Qty', 'Price'];
        let toShow = <Spinner />
        if(this.props.orders) {
            const orders = this.props.orders;
            toShow = Object.keys(orders).map((hashKey, index) => {
                return(
                    <Order key = {index} ingredients = {orders[hashKey].ingredients} price = {orders[hashKey].totalPrice} />
                );
            });    
        }
        return(
            <div>
                <Toolbar />
                <div className = "container">
                    <div className = "header-orders">
                        {
                            tableHeaders.map((val, index) => {
                                return(<div key = {index} className = {`col-${index+1}`}>{val}</div>)
                            })
                        }
                    </div>
                    <div className = "order-container">
                        {toShow}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOrderHistory: () => dispatch(actionTypes.fetchOrders())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);