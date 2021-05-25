import React from 'react';
import MapPage from '../components/MapPage.js';
import LandingPage from '../components/LandingPage.js';
import {Route, Link, Switch} from 'react-router-dom'

function UserEditPage() {
  return (
    <div className="userEditPage">
      <h3>UserEditPage</h3>
      Information goes here...
      <div className="menu">
        Menu:
        <Switch>
        <ul id="menu">
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/">Landing</Link></li>

        </ul>

        <div className="debugcontent">
        <Route path="/map" component={MapPage} />
        <Route exact path="/" component={LandingPage} />

        </div>
        </Switch>
      </div>
    </div>
  );
}

export default UserEditPage;
