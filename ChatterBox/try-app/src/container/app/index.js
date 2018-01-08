import React from 'react'
import { Route, Link } from 'react-router-dom'
import LoginPage from '../LoginPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from '../LoginPage';
import Sidemenu from '../Sidemenu/sidemenu.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Register from '../Registration/register.js'
import Profile_setup_secondstep from '../setProfile/profile-setup-two.js'
import Profile_setup_laststep from '../setProfile/profile-setup-last.js'

const App = () => (
  <MuiThemeProvider>
  <div>
    <main>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/step-two" component={Profile_setup_secondstep} />
      <Route exact path="/last-step" component={Profile_setup_laststep} />
    </main>
  </div>
    <div>
      <main>
        <Route exact path="/" component={Sidemenu} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={Register} />
      </main>
    </div>
  </MuiThemeProvider>
)

export default App