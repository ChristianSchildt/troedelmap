import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage.js';
import ExplorePage from './pages/ExplorePage.js';
import LoginPage from './pages/LoginPage.js';
import MapPage from './pages/MapPage.js';
import TroedelInsertPage from './pages/TroedelInsertPage.js';
import TroedelEditPage from './pages/TroedelEditPage.js';
import UserRegistrationPage from './pages/UserRegistrationPage.js';
import UserEditPage from './pages/UserEditPage.js';
import {BrowserRouter, Route} from 'react-router-dom';


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
      </BrowserRouter>
    </div>
  );
}

export default App;
