import React from 'react';
import MapPage from '../components/MapPage.js';
import {Route, Link, Switch} from 'react-router-dom'


function TroedelEditPage() {
  return (
    <div className="troedelEditPage container-fluid">
      <h3>TroedelEditPage</h3>
      Information goes here...
      <div className="menu">
        Menu:
        <Switch>
        <ul id="menu">
        <li><Link to="/map">Map</Link></li>

        </ul>

        <div className="debugcontent">
        <Route path="/map" component={MapPage} />

        </div>
        </Switch>
      </div>
    </div>
  );
}

export default TroedelEditPage;
