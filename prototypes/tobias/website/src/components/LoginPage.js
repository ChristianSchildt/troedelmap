import React from 'react';
import LandingPage from '../components/LandingPage.js';
import MapPage from '../components/MapPage.js';

import {Route, Link, Switch} from 'react-router-dom'

function LoginPage() {
  return (
    <div className="loginPage container-fluid">
      <h3>LoginPage</h3>
      <div className="row">
        <div className="col-md-12 text-center">
          Log dich ein
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
          Password
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          Email
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <a href = "/map"><button type="button" class="btn btn-light">
            Einloggen
          </button></a>
        </div>
      </div>










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
