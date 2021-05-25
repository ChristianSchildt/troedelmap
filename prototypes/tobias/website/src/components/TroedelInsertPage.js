import React from 'react';
import MapPage from '../components/MapPage.js';
import {BrowserRouter, Route, Link} from 'react-router-dom'


function TroedelInsertPage() {
  return (
    <div className="troedelInsertPage">
      <h3>TroedelInsertPage</h3>
      Information goes here...
      <div className="DebugMenu">
        Debug Menu:
        <BrowserRouter>
        <ul id="debugMenu">
        <li><Link to="/map">Map</Link></li>

        </ul>

        <div className="debugcontent">
        <Route path="/map" component={MapPage} />

        </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default TroedelInsertPage;
