import React from 'react';
import LandingPage from '../components/LandingPage.js';
import TroedelInsertPage from '../components/TroedelInsertPage.js';
import TroedelEditPage from '../components/TroedelEditPage.js';
import UserEditPage from '../components/UserEditPage.js';

import {BrowserRouter, Route, Link} from 'react-router-dom'

function MapPage() {
  return (
    <div className="mapPage">
      <h3>MapPage</h3>
      Information goes here...
      <div className="DebugMenu">
        Debug Menu:
        <BrowserRouter>
        <ul id="debugMenu">
          <li><Link to="/">Landing</Link></li>
          <li><Link to="/troedelInsert">TroedelInsert</Link></li>
          <li><Link to="/troedelEdit">TroedelEdit</Link></li>
          <li><Link to="/userEdit">UserEdit</Link></li>
        </ul>

        <div className="debugcontent">
        <Route exact path="/" component={LandingPage} />
        <Route path="/troedelInsert" component={TroedelInsertPage} />
        <Route path="/troedelEdit" component={TroedelEditPage} />
        <Route path="/userEdit" component={UserEditPage} />

        </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default MapPage;
