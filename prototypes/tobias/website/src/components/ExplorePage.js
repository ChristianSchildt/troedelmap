import React from 'react';
import LandingPage from '../components/LandingPage.js';
import UserRegistrationPage from '../components/UserRegistrationPage.js';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

function ExplorePage() {
  return (
    <div className="explorePage">
      <h3>ExplorePage</h3>
      Information goes here...
      <div className="DebugMenu">
      Debug Menu:
      <Switch>
      <ul id="debugMenu">
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/userRegistration">UserRegistration</Link></li>

      </ul>

      <div className="debugcontent">
      <Route exact path="/" component={LandingPage} />
      <Route path="/userRegistration" component={UserRegistrationPage} />

      </div>
      </Switch>
    </div>
  </div>
  );
}

export default ExplorePage;
