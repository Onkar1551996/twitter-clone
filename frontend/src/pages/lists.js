import React from "react";
import './css/lists.css';
import Dashboard from './dashboard';

export default () => {
    return (
        <div className="main-lsts-container">
            <div className="col1-lsts cols-lsts">
                <div className="col1-lsts-body">
                    <Dashboard />
                </div>
            </div>
            <div className="col2-lsts cols-lsts">
                 <div className="col2-lsts-body"></div>
            </div>
            <div className="col3-lsts cols-lsts">
                <div className="col3-lsts-body"></div>
            </div>
        </div>
    );
}