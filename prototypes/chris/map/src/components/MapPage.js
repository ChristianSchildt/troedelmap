import React from 'react';
import LandingPage from '../components/LandingPage.js';
import TroedelInsertPage from '../components/TroedelInsertPage.js';
import TroedelEditPage from '../components/TroedelEditPage.js';
import UserEditPage from '../components/UserEditPage.js';

import {Route, Link, Switch} from 'react-router-dom'

function MapPage() {
  return (
    <div className="mapPage">
      <h3>MapPage</h3>

      <p>Hier wird die Tolle Trödelmap sein.</p>

      <div className="menu">
        Menu:
        <Switch>
        <ul id="menu">
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
        </Switch>
      </div>
    </div>
  );
}

export default MapPage;
