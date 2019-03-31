import React from 'react';
import Aux from '../../hoc/Aux';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    return(
        <Aux>
            <Backdrop showOrderSummary = {props.showOrderSummary} closed = {props.closeBackdrop} />
            <div className = {props.customStyles ? "CustomStyledModal" : "Modal"} style = {{display: props.showOrderSummary ? 'block' : 'none'}}>
                {props.children}
            </div>
        </Aux>
    );
};

export default Modal;