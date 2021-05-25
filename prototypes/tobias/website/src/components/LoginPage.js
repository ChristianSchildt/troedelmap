import React from 'react';
import LandingPage from '../components/LandingPage.js';
import MapPage from '../components/MapPage.js';

import {Route, Link, Switch} from 'react-router-dom'

function LoginPage() {
  return (
    <div className="loginPage">
      <h3>LoginPage</h3>
      Information goes here...
      <div className="menu">
        Menu:
        <Switch>
        <ul id="menu">
          <li><Link to="/">Landing</Link></li>
          <li><Link to="/map">Map</Link></li>

        </ul>

        <div className="debugcontent">
        <Route exact path="/" component={LandingPage} />
        <Route path="/map" component={MapPage} />

        </div>
        </Switch>
      </div>
    </div>
  );
}

export default LoginPage;
