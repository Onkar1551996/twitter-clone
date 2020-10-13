import React from "react";
import './css/messages.css';
import Dashboard from './dashboard';

export default () => {
    return (
        <div className="main-msgs-container">
            <div className="col1-msgs cols-msgs">
                <div className="col1-msgs-body">
                    <Dashboard />
                </div>
            </div>
            <div className="col2-msgs cols-msgs">
                 <div className="col2-msgs-body"></div>
            </div>
            <div className="col3-msgs cols-msgs">
                <div className="col3-msgs-body"></div>
            </div>
        </div>
    );
}