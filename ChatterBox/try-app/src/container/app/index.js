import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from '../LoginPage';
import Sidemenu from '../Sidemenu/sidemenu.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const App = () => (
  <MuiThemeProvider>
  <div>
    <main>
      <Route exact path="/" component={Sidemenu} />
    </main>
  </div>
  </MuiThemeProvider>
)

export default App