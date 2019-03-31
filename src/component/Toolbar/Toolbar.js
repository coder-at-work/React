import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = (props) => {
    return(
        <header>
            <div className = "left-section">
                <Link to = "/">
                    <div className = "item">
                        HOME
                    </div>
                </Link>
                <Link to = "/orders">
                    <div className = "item">
                        ORDERS
                    </div>
                </Link>
            </div>
            <div className = "right-section">
                <div className = "item">LOGO</div>
            </div>
        </header>
    )
}

export default Toolbar