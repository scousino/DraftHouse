import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login/Login";
import "./App.css";
import DraftRoom from "./DraftRoom/DraftRoom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        100 Beer Challenge
      </header>
        <Router>
          <div className="App-main">
            <Route path="/" exact component={Login} />
            <Route path="/room/:id/:name" component={DraftRoom} />
          </div>
        </Router>
    </div>
  );
}

export default App;
