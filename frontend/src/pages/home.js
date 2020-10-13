import React from "react";
import './css/home.css';
import Dashboard from './dashboard';

export default () => {
    return (
        <div className="main-home-container">
            <div className="col1-home cols-home">
                <div className="col1-home-body">
                    <Dashboard />
                </div>
            </div>
            <div className="col2-home cols-home">
                 <div className="col2-home-body"></div>
            </div>
            <div className="col3-home cols-home">
                <div className="col3-home-body"></div>
            </div>
        </div>
    );
}