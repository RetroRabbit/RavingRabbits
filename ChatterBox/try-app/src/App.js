import React, { Component } from 'react';
import './App.css';
import LoginPage from './container/LoginPage'
import Registration from './container/Registration'
import { Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
      <main>
     
      <Route exact path="/" component={Registration} />
      </main>
  </div>    );
  }
}

export default App;