import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Modal from '../../../component/common/Modal/Modal';

const ErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });
            axios.interceptors.response.use(response => response, error => {
                this.setState({
                    error: error
                });
            });
        }

        errorSeenHandler = () => {
            this.setState({
                error: null
            });
        }

        render() {
            return(
                <Aux>
                    <Modal 
                        showOrderSummary = {this.state.error !== null ? true : false}
                        closeBackdrop = {this.errorSeenHandler}
                        customStyles = {false}
                    >
                        {this.state.error !== null ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )    
        }
    } 
};

export default ErrorHandler;