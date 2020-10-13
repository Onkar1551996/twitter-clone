import React from "react";
import './css/notifications.css';
import Dashboard from './dashboard';

export default () => {
    return (
        <div className="main-not-container">
            <div className="col1-not cols-not">
                <div className="col1-not-body">
                    <Dashboard />
                </div>
            </div>
            <div className="col2-not cols-not">
                 <div className="col2-not-body"></div>
            </div>
            <div className="col3-not cols-not">
                <div className="col3-not-body"></div>
            </div>
        </div>
    );
}