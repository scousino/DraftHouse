import React from 'react';
import logo from './logo.svg';
import Login from './Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
        
      </header>
    </div>
  );
}

export default App;
