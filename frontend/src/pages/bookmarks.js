import React from "react";
import { Link } from 'react-router-dom';
import Dashboard from "../pages/dashboard";
import SearchTwitter from "../components/searchtwitter";
import Happening from '../components/happening';
import './css/bookmarks.css';

export default () => {
    return (
      <>
        <Dashboard />
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
        <SearchTwitter />
        <Happening />
      </>
    );
}