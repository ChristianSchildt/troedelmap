import React from 'react';
import ExplorePage from '../components/ExplorePage.js';
import LoginPage from '../components/LoginPage.js';

import {BrowserRouter, Route, Link} from 'react-router-dom'

function LandingPage() {
  return (
    <div className="landingPage">
      <h3>LandingPage</h3>
      This is the LandingPage Page.
      <div className="DebugMenu">
        Debug Menu:
        <BrowserRouter>
        <ul id="debugMenu">
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/login">Login</Link></li>

        </ul>

        <div className="debugcontent">
        <Route path="/explore" component={ExplorePage} />
        <Route path="/login" component={LoginPage} />

        </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default LandingPage;


