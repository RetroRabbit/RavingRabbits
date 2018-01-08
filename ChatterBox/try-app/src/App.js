import React, { Component } from 'react';
import './App.css';
import LoginPage from './container/LoginPage';
import Sidemenu from './container/Sidemenu';
import { Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <main>
                    <Route exact path="/" component={Sidemenu} />
                </main>
            </div>
        );
    }
}

export default App;
