import React from 'react';
import MapPage from '../components/MapPage.js';
import LandingPage from '../components/LandingPage.js';
import {Route, Link, Switch} from 'react-router-dom'

function UserEditPage() {
  return (
    <div className="userEditPage container-fluid">
      <h3>UserEditPage</h3>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="row">
            <div className="col-md-12 text-center">
              Bearbeite deine Benutzerdaten
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              Benutzername
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              Email
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              Password
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              Password wiederholen
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              Kontaktinfos
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              Profilbild
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <a href = "/login"><button type="button" class="btn btn-light">
                Änderungen übernehmen
              </button></a>
            </div>
          </div>
        </div>

        <div className="col-md-3 my-auto">
          <div className="col-md-12 text-center">
            <a href = "/"><button type="button" class="btn btn-light">
              Benutzerkonto löschen
            </button></a>
          </div>
        </div>
      </div>







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
