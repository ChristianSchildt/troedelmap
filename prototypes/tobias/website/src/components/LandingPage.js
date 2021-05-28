import React from 'react';
import ExplorePage from '../components/ExplorePage.js';
import LoginPage from '../components/LoginPage.js';

import {Route, Link, Switch} from 'react-router-dom'

function LandingPage() {
  return (
    <div className="landingPage container-fluid">
      <h3>LandingPage</h3>
      <div className="row">
        <div className="col-md-3 offset-md-1 text-center">
          Entdecke unseren Service
          <Link to="/explore">Explore</Link>
        </div>
        <div className="col-md-3 offset-md-4 text-center">
          Log dich ein
          <Link to="/login">Login</Link>
        </div>
      </div>
      
      
      
      
      
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


