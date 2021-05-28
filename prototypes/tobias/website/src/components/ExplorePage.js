import React from 'react';
import LandingPage from '../components/LandingPage.js';
import UserRegistrationPage from '../components/UserRegistrationPage.js';

import {Route, Link, Switch} from 'react-router-dom'

function ExplorePage() {
  return (
    <div className="explorePage container-fluid">
      <h3>ExplorePage</h3>
      <div className="row">
        <div className="col-md-12 text-center">
          Du bist Student an der FH-Bochum?
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
        Gut... dann stellen wir dir jetzt die optimale Handelsplattform zur Verfügung.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
        Innerhalb weniger Klicks, kannst du hier kaufen und verkaufen was auch immer du möchtest.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
        Und das Beste ist, es ist auch während Corona möglich.
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <a href = "/userRegistration"><button type="button" class="btn btn-light">
            Werde jetzt Teil der Community
          </button></a>
        </div>
      </div>




      <div className="menu">
      Menu:
      <Switch>
      <ul id="menu">
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/userRegistration">UserRegistration</Link></li>

      </ul>

      <div className="debugcontent">
      <Route exact path="/" component={LandingPage} />
      <Route path="/userRegistration" component={UserRegistrationPage} />

      </div>
      </Switch>
    </div>
  </div>
  );
}

export default ExplorePage;
