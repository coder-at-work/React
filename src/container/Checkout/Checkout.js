import React, { Component } from 'react';
import CheckoutPage from './CheckoutPage';
import Toolbar from '../../component/Toolbar/Toolbar';
import ContactForm from './../../component/Form/ContactForm';
import axiosInstance from '../../axios-instance';
import Spinner from '../../component/common/Spinner/Spinner';
import Modal from '../../component/common/Modal/Modal';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/index';
import './Checkout.css';

class Checkout extends Component {
    state = {
        email: "",
        Name: "",
        Mobile: "",
        Address: "",
        PinCode: "",
        errors: {
          Email: "",
          Name: "",
          Mobile: "",
          PinCode: ""  
        },
        nameError: true,
        emailError: true,
        mobileError: true,
        pinError: true,
        formError: true,
        showLoader: false,
        modalText: null
    }

    proceedBtnHandler = () => {
        this.setState({
            showLoader: true
        });

        const orderDetails = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            customerDetails: {
                name: this.state.Name,
                email: this.state.Email,
                address: this.state.Address,
                mobile: this.state.Mobile,
                pinCode: this.state.PinCode
            }
        }
        axiosInstance.post('/orders.json', orderDetails)
            .then(response => {
                if(response.status === 200) {
                    this.setState({
                        showLoader: false,
                        modalText: 'Order Successfully Saved'
                    })    
                }
            })
            .catch(error => {
                this.setState({
                    showLoader: false
                })
            })

    }

    closeBackdropHandler = () => {
        this.setState({
            modalText: null
        });
        this.props.history.goBack();
    }

    cancelBtnHandler = () => {
        this.props.history.goBack();
    }

    inputChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.validateFunc(name, value);
    }

    validateFunc = (name, value) => {
        let error = this.state.errors;
        let nameError = this.state.nameError, 
            emailError = this.state.emailError, 
            mobileError = this.state.mobileError, 
            pinError = this.state.pinError;

        switch (name) {
            case "Name":
              nameError = !/^[a-zA-Z ]+$/.test(value);
              error.Name = nameError ? " is Invalid" : "";
            break;
            case "Email":
              emailError = !/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
              error.Email = emailError ? " is Invalid" : "";
            break;
            case "Mobile":
              mobileError = !/^[0-9]{10}$/.test(value);
              error.Mobile = mobileError ? " is Invalid" : "";
            break;
            case "PinCode":
              pinError = !/^[0-9]{6}$/.test(value);
              error.PinCode = pinError ? " is Invalid" : "";
            break;
            default:
            break;
        }
        this.setState({
          errors: error,
          nameError: nameError,
          emailError: emailError,
          mobileError: mobileError,
          pinError: pinError,
          formError: nameError || emailError || mobileError || pinError,
          [name]: value
        });
      };    

    render() {
        let toShow = '', showModal = '';
        if(this.state.showLoader) {
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
            <div className = "HocStyle">
                <Toolbar />
                <div className = "CheckoutContainer">
                    <CheckoutPage ingredients = {this.props.ingredients} 
                        proceedBtnHandler = {this.proceedBtnHandler}
                        cancelBtnHandler = {this.cancelBtnHandler}
                        disabled = {this.state.formError}
                    />
                    <ContactForm 
                        inputChangeHandler = {event => this.inputChangeHandler(event)}
                        error = {this.state.errors} 
                    />
                </div>
                {toShow}
                {showModal}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients.ingredients,
        totalPrice: state.ingredients.totalPrice
    }
};

export default connect(mapStateToProps)(Checkout);