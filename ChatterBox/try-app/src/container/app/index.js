import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from '../LoginPage';
import Sidemenu from '../Sidemenu/sidemenu.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Register from '../Registration/register.js'



const App = () => (
  <MuiThemeProvider>
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