import React from 'react';
import Feed from './components/Feed.js'
import Explore from './components/explore/Explore.js'
import Navbar from './components/Navbar.js'
import Socials from './components/Socials.js'
import Map from './components/Map'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/feed" component={Feed} />
            <Route path="/explore/:id?" component={Explore} />
            <Route path="/map/:id?" component={Map} />
          </Switch>
        </Router>
      </header>
      <Socials />
    </div>
  );
}

export default App;
