import React, { Component } from 'react';
import './App.css';
import LoginPage from './container/LoginPage';
import Register from './container/Registration/register.js';
import { Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
      <main>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/" component={Register} />
      </main>
  </div>    
  );
  }
}

export default App;