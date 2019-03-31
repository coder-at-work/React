import React from 'react';
import ShowError from './ErrorCase/ShowError';
import './ContactForm.css';

const ContactForm = (props) => {
    return(
        <div className = "formStyle">
            <div className = 'form-title'>
                Please Fill Your Details
            </div>
            <form>
                <div className = "form-data">
                    <input 
                        type = "text" 
                        name = "Name" 
                        placeholder = "Name" 
                        onChange = {props.inputChangeHandler}
                    />
                    <input 
                        type = "email" 
                        name = "Email" 
                        placeholder = "E-Mail Address"
                        onChange = {props.inputChangeHandler} 
                    />
                    <input 
                        type = "number" 
                        name = "Mobile" 
                        placeholder = "Mobile Number" 
                        onChange = {props.inputChangeHandler}
                    />
                    <input 
                        type = "text" 
                        name = "Address" 
                        placeholder = "Address"
                        onChange = {props.inputChangeHandler}
                    />
                    <input 
                        type = "number" 
                        name = "PinCode" 
                        placeholder = "PIN Code" 
                        onChange = {props.inputChangeHandler}
                    />
                </div>
            </form>
            <ShowError error = {props.error} />
        </div>
    );
};

export default ContactForm;