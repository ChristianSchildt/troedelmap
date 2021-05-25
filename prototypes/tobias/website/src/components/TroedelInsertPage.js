import React from 'react';
import MapPage from '../components/MapPage.js';
import {Route, Link, Switch} from 'react-router-dom'


function TroedelInsertPage() {
  return (
    <div className="troedelInsertPage">
      <h3>TroedelInsertPage</h3>
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

export default TroedelInsertPage;
