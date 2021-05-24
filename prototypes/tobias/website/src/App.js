import React from 'react';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Contact from './components/Contact.js';
import {BrowserRouter, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      Menu:
      <BrowserRouter>
      <ul id="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      

      <div className="content">
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />

      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
