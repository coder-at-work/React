import React, { Component } from 'react';
import Aux from '../../component/hoc/Aux';
import Burger from '../../component/Burger/Burger';
import BuildControl from '../../component/Burger/BuildControl/BuildControl';
import Modal from '../../component/common/Modal/Modal';
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary';
import Toolbar from './../../component/Toolbar/Toolbar';
import axiosInstance from '../../axios-instance';
import ErrorHandler from '../../component/hoc/errorHandler/ErrorHandler';
import Spinner from '../../component/common/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/index';
import { INGREDIENT_PRICES } from '../../component/Burger/Constants';
import './BurgerBuilder.css';


class BurgerBuilder extends Component {
    state = {
        proceedToCheckout: false,
        modalText: null
    };

    componentDidMount() {
        this.props.resetToDefault();
        this.props.initIngredients();
    }

    showOrderSummary = () => {
        this.setState({
            proceedToCheckout: true
        });
    };

    closeBackdropHandler = () => {
        this.setState({
            proceedToCheckout: false,
            modalText: null
        });
    };

    // addIngredientHandler = (type) => {
    //     const currentIngVal = this.props.ingredients[type];
    //     const newIngVal = currentIngVal + 1;
    //     const price = INGREDIENT_PRICES[type];
    //     const newPrice = this.state.totalPrice + price;
    //     const mutatedIngredients = {
    //         ...this.props.ingredients
    //     };
    //     mutatedIngredients[type] = newIngVal;
    //     this.setState({
    //         ingredients: mutatedIngredients,
    //         totalPrice: newPrice
    //     });
    // };

    // removeIngredientHandler = (type) => {
    //     const currentIngVal = this.props.ingredients[type];
    //     if(currentIngVal === 0) 
    //         return;
    //     const newIngVal = currentIngVal - 1;
    //     const price = INGREDIENT_PRICES[type];
    //     const newPrice = this.state.totalPrice - price;
    //     const mutatedIngredients = {
    //         ...this.props.ingredients
    //     };
    //     mutatedIngredients[type] = newIngVal;
    //     this.setState({
    //         ingredients: mutatedIngredients,
    //         totalPrice: newPrice
    //     });
    // };

    proceedBtnHandler = () => {
        // For redirecting to checkout page
        this.props.history.push('/checkout');
    };

    cancelBtnHandler = () => {
        this.setState({
            proceedToCheckout: false
        });  
    };

    render() {
        const burgerStyle = {
            'height': '300px',
            'overflow': 'auto',
            'margin-top': '30px'
        };

        let disabledInfo = {
            ...this.props.ingredients
        };
        for(let type in disabledInfo) {
            disabledInfo[type] = (disabledInfo[type] === 0);
        }

        const orderSummary = <OrderSummary 
            ingredients = {this.props.ingredients} 
            prices = {INGREDIENT_PRICES} 
            totalPrice = {this.props.totalPrice} 
            proceedBtnHandler = {this.proceedBtnHandler}
            cancelBtnHandler = {this.cancelBtnHandler}
        />

        let toShow = <Spinner />, showModal = null;


        if(this.props.ingredients) {
            toShow = 
                <Aux>
                    <Modal 
                        showOrderSummary = {this.state.proceedToCheckout} 
                        closeBackdrop = {this.closeBackdropHandler}
                        customStyles = {true}>
                        {orderSummary}
                    </Modal>
                    <Burger 
                        ingredients = {this.props.ingredients}
                        burgerStyle = {burgerStyle}
                    />
                    <BuildControl
                        addIng = {this.props.addIngredient}
                        remIng = {this.props.removeIngredient} 
                        cost = {this.props.totalPrice}
                        disabled = {disabledInfo}
                        purchasable = {this.props.purchasable}
                        showOrderSummary = {this.showOrderSummary}
                    />
                </Aux>
        }

        if(this.props.loader) {
            toShow = <Spinner />;
        }
        if(this.state.modalText) {
            showModal = <Modal showOrderSummary = {this.state.modalText !== null ? true : false}
                closeBackdrop = {this.closeBackdropHandler}
                customStyles = {false} 
            >
                {this.state.modalText !== null ? this.state.modalText : null}
            </Modal>
        }
        return(
            <Aux className = "HocStyle">
                <Toolbar ingredients = {this.props.ingredients} />
                {toShow}
                {showModal}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients.ingredients,
        totalPrice: state.ingredients.totalPrice,
        purchasable: state.ingredients.purchasable,
        loader: state.ingredients.loader
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ignName) => dispatch(actionTypes.addIngredients(ignName)),
        removeIngredient: (ignName) => dispatch(actionTypes.removeIngredients(ignName)),
        initIngredients: () => dispatch(actionTypes.fetchIngredients()),
        resetToDefault: () => dispatch(actionTypes.resetToDefault())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurgerBuilder, axiosInstance));