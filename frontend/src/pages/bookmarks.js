import React from "react";
import { Link } from 'react-router-dom';
import './css/bookmarks.css';
import Dashboard from './dashboard';

export default () => {
    return (
        <div className="main-bkmk-container">
            <div className="col2-bkmk">
                 <div className="col2-bkmk-body">
								 <Link to="/bookmarks" id="bkmklink">
										<div id="bkmklnktxt">Bookmarks</div>
										<span id="bkmkusername">@OMPAWAR20</span>
								</Link>
								 </div>
            </div>
        </div>
    );
}