import React from "react";
import './css/explore.css';
import Dashboard from './dashboard';

export default () => {
    return (
        <div className="main-explr-container">
            <div className="col1-explr cols-explr">
                <div className="col1-explr-body">
                    <Dashboard />
                </div>
            </div>
            <div className="col2-explr cols-explr">
                 <div className="col2-explr-body"></div>
            </div>
            <div className="col3-explr cols-explr">
                <div className="col3-explr-body"></div>
            </div>
        </div>
    );
}