import React from 'react';
import LandingPage from '../components/LandingPage.js';
import LoginPage from '../components/LoginPage.js';

import {Route, Link, Switch} from 'react-router-dom'

function UserRegistrationPage() {
  return (
    <div className="userRegistrationPage container-fluid">
      <h3>UserRegistrationPage</h3>
      
      <div className="row">
        <div className="col-md-12 text-center">
          Registrier dich jetzt
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
            Registrieren
          </button></a>
        </div>
      </div>






      <div className="menu">
        Menu:
        <Switch>
        <ul id="menu">
          <li><Link to="/">Landing</Link></li>
          <li><Link to="/login">Login</Link></li>

        </ul>

        <div className="debugcontent">
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />

        </div>
        </Switch>
      </div>
    </div>
  );
}

export default UserRegistrationPage;
