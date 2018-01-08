<<<<<<< HEAD
import React, { Component } from 'react';
import './App.css';
import LoginPage from './container/LoginPage';
import Sidemenu from './container/Sidemenu';
import { Route, Link } from 'react-router-dom';
=======
import React, { Component } from 'react'
import './App.css'
import LoginPage from './container/LoginPage'
import Sidemenu from './container/Sidemenu'
import { Route, Link } from 'react-router-dom'

>>>>>>> a77b005e51c5596f2bf33e983587303ef0c6c33a

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
