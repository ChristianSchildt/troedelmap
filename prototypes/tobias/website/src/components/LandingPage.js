import React from 'react';
import ExplorePage from '../components/ExplorePage.js';
import LoginPage from '../components/LoginPage.js';

import {Route, Link, Switch} from 'react-router-dom'

function LandingPage() {
  return (
    <div className="landingPage">
      <h3>LandingPage</h3>
      This is the LandingPage Page.
      <div className="menu">
        Menu:
        <Switch>
        <ul id="menu">
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/login">Login</Link></li>

        </ul>

        <div className="debugcontent">
        <Route path="/explore" component={ExplorePage} />
        <Route path="/login" component={LoginPage} />

        </div>
        </Switch>
      </div>
    </div>
  );
}

export default LandingPage;


