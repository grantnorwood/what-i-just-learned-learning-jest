import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import AboutPage from "./pages/AboutPage";
import BeersPage from "./pages/BeersPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/beers/">Beers</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={HomePage} />
        <Route path="/about/" component={AboutPage} />
        <Route path="/beers/" component={BeersPage} />
      </div>
    </Router>
  );
}

export default App;
