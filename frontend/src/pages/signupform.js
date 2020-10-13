import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/signupform.css";

export default () => {
  const [count, setCount] = useState(0);
  const [showPhone, setShowPhone] = useState(true);

  function switchElement() {
    setShowPhone(!showPhone);
  }

  return (
    <div className="signupform">
      <div className="formbox">
        <span className="boxheader">
          <img src="images/twitterlogo.png" alt="logo" className="logo3" />
          <Link to="/" className="nxtbtn">
            Next
          </Link>
        </span>
        <div className="boxbody">
          <h2 id="crtacct">Create your account</h2>
          <div className="formelement">
            <div className="nameinput">
              <div className="placediv">Name</div>
              <input
                type="text"
                name="name"
                maxLength="50"
                onChange={(e) => setCount(e.target.value.length)}
                className="signupinput"
              />
              <br />
              <p id="charcount">{count}/50</p>
            </div>
            <br />
            <div className="phoneemailswitch">
              {showPhone ? (
                <div className="phoneinput">
                  <div className="placediv">Phone</div>
                  <input type="text" name="phone" className="signupinput" />
                  <br />
                </div>
              ) : (
                <div className="emailinput">
                  <div className="placediv">Email</div>
                  <input type="text" name="email" className="signupinput" />
                  <br />
                </div>
              )}
            </div>
            <Link onClick={switchElement} id="switchelement">
              Use {showPhone ? "email" : "phone"} instead
            </Link>
            <div id="dobsection">
              <p id="dobheading">Date of birth</p>
              <div id="dobinfo">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </div>
              <div className="dob">
                <input
                  type="date"
                  max="2020-10-09"
                  min="1900-10-09"
                  step="1"
                  id="dob"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
