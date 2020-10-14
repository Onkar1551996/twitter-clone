import React from 'react';
import Dashboard from './dashboard';
import Home from './home';
import './css/experiment.css';

export default () => {
    return(
        <>
        <div className="first">
            <Dashboard />
        </div>
        <div className="second">
            <Home />
        </div>
        </>
    );
}