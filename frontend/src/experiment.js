import React from 'react';
import './experiment.css';
import Happening from './components/happening';
import Search from './components/searchtwitter';

export default () => {
    return (
        <div id="experiment-container">
					<Search />
            <Happening />
        </div>
    );
}