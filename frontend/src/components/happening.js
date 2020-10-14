import React from 'react';
import { Link } from 'react-router-dom';
import './css/happening.css';

export default () => {
    return (
        <div className="hpng-main-container">
					<div className="card-header">
						<span className="card-hd">What&#8217;s happening</span>
					</div>
					<div className="card-sections">

					</div>
					<div className="card-sections">
						
					</div>
					<div className="card-sections">
						
					</div>
					<div className="card-sections">
						
					</div>
					<div className="card-sections">
						
					</div>
					<Link to="/experiment" className="card-footer">
						<div className="card-ft">
							Show more
						</div>
					</Link>
        </div>
    );
}