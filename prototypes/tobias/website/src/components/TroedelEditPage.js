import React from 'react';
import MapPage from '../components/MapPage.js';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'


function TroedelEditPage() {
  return (
    <div className="troedelEditPage">
      <h3>TroedelEditPage</h3>
      Information goes here...
      <div className="DebugMenu">
        Debug Menu:
        <Switch>
        <ul id="debugMenu">
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
