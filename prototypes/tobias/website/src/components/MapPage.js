import React from 'react';
import LandingPage from '../components/LandingPage.js';
import TroedelInsertPage from '../components/TroedelInsertPage.js';
import TroedelEditPage from '../components/TroedelEditPage.js';
import UserEditPage from '../components/UserEditPage.js';

import {Route, Link, Switch} from 'react-router-dom'

function MapPage() {
  return (
    <div className="mapPage container-fluid">
      <div className="row">
        <div className="col-md-1">
          <img id="logoicon" src="logo512.png" alt="Trödelmap"/>
        </div>
        <div className="col-md-4 offset-md-3">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Suche..."/>
            <button class="btn btn-success" type="submit" id="button-addon2">Go</button>
          </div>
        </div>
        <div className="col-md-1 offset-md-2">
          <div className="row">
            <div className="col-md-4">
            <a href = "/troedelInsert"><button type="button" class="btn btn-light">
              +
            </button></a>
            </div>
            <div className="col-md-4">
              <a href = "/troedelEdit"><button type="button" class="btn btn-light">
                ?
              </button></a>
            </div>
          </div>
        </div>
        <div className="col-md-1">
          <div className="row">
            <div className="col-md-4">
            <a href = "/"><button type="button" class="btn btn-light">
              ESC
            </button></a>
            </div>
            <div className="col-md-4">
            <a href = "/userEdit"><button type="button" class="btn btn-light">
              \o/
            </button></a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div style={{height: "90vh", backgroundColor: "LemonChiffon"}}>Das ist die Karte!</div>
        </div>
      </div>


      <div className="menu row">
        <div className="col-md-12">
        Menu:
        <Switch>
        <ul id="menu">
          <li><Link to="/">Landing</Link></li>
          <li><Link to="/troedelInsert">TroedelInsert</Link></li>
          <li><Link to="/troedelEdit">TroedelEdit</Link></li>
          <li><Link to="/userEdit">UserEdit</Link></li>
        </ul>

        <div className="debugcontent">#
        <Route exact path="/" component={LandingPage} />
        <Route path="/troedelInsert" component={TroedelInsertPage} />
        <Route path="/troedelEdit" component={TroedelEditPage} />
        <Route path="/userEdit" component={UserEditPage} />

        </div>
        </Switch>
        </div>
      </div>
    </div>
  );
}

export default MapPage;
