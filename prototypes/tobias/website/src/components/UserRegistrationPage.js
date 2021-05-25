import React from 'react';
import LandingPage from '../components/LandingPage.js';
import LoginPage from '../components/LoginPage.js';

import {BrowserRouter, Route, Link} from 'react-router-dom'

function UserRegistrationPage() {
  return (
    <div className="userRegistrationPage">
      <h3>UserRegistrationPage</h3>
      Information goes here...
      <div className="DebugMenu">
        Debug Menu:
        <BrowserRouter>
        <ul id="debugMenu">
          <li><Link to="/">Landing</Link></li>
          <li><Link to="/login">Login</Link></li>

        </ul>

        <div className="debugcontent">
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />

        </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default UserRegistrationPage;
