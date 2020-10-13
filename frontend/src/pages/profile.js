import React from "react";
import './css/profile.css';
import Dashboard from './dashboard';

export default () => {
    return (
        <div className="main-prfl-container">
            <div className="col1-prfl cols-prfl">
                <div className="col1-prfl-body">
                    <Dashboard />
                </div>
            </div>
            <div className="col2-prfl cols-prfl">
                 <div className="col2-prfl-body"></div>
            </div>
            <div className="col3-prfl cols-prfl">
                <div className="col3-prfl-body"></div>
            </div>
        </div>
    );
}