import React from "react";
import './css/bookmarks.css';
import Dashboard from './dashboard';

export default () => {
    return (
        <div className="main-bkmk-container">
            <div className="col1-bkmk cols-bkmk">
                <div className="col1-bkmk-body">
                    <Dashboard />
                </div>
            </div>
            <div className="col2-bkmk cols-bkmk">
                 <div className="col2-bkmk-body"></div>
            </div>
            <div className="col3-bkmk cols-bkmk">
                <div className="col3-bkmk-body"></div>
            </div>
        </div>
    );
}