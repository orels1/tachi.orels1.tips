import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import './App.css';

const App = () => (
  <div>
    <header>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about-us" className="nav-link">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
