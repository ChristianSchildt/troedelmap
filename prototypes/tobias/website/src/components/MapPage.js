import React from 'react';
import LandingPage from '../components/LandingPage.js';
import TroedelInsertPage from '../components/TroedelInsertPage.js';
import TroedelEditPage from '../components/TroedelEditPage.js';
import UserEditPage from '../components/UserEditPage.js';

import {Route, Link, Switch} from 'react-router-dom'

function MapPage() {
  return (
    <div className="mapPage">
      <div className="row">
        <h3>MapPage</h3>
        <p>Hier wird die Tolle Trödelmap sein.</p>
      </div>
      <div className="row">
        <div className="col-3">
          <p>Suchleiste ist hier</p>
        </div>
        <div className="col-1">
          <p>(+)</p>
          <p>(?)</p>
        </div>
        <div className="col-1">
          <p>ESC</p>
          <p>\O/</p>
        </div>
      </div>

      <div className="menu row">
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
