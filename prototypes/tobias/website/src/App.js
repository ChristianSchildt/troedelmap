import React from 'react';
import LandingPage from './components/LandingPage.js';
import ExplorePage from './components/ExplorePage.js';
import LoginPage from './components/LoginPage.js';
import MapPage from './components/MapPage.js';
import TroedelInsertPage from './components/TroedelInsertPage.js';
import TroedelEditPage from './components/TroedelEditPage.js';
import UserRegistrationPage from './components/UserRegistrationPage.js';
import UserEditPage from './components/UserEditPage.js';

import Products from './components/Products.js';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/explore" component={ExplorePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/map" component={MapPage} />
      <Route path="/troedelInsert" component={TroedelInsertPage} />
      <Route path="/troedelEdit" component={TroedelEditPage} />
      <Route path="/userRegistration" component={UserRegistrationPage} />
      <Route path="/userEdit" component={UserEditPage} />

      <ul id="debugMenu">
        <Route path="/products" component={Products} />

        Debug Menu:
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/troedelInsert">TroedelInsert</Link></li>
        <li><Link to="/troedelEdit">TroedelEdit</Link></li>
        <li><Link to="/userRegistration">UserRegistration</Link></li>
        <li><Link to="/userEdit">UserEdit</Link></li>

        <li><Link to="/products">Test</Link></li>
        --------------------------------
      </ul>
      </BrowserRouter>
    </div>
  );
}

export default App;
