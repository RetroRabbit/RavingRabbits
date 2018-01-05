import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from '../LoginPage';
import Registration from '../Registration';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const App = () => (
  <MuiThemeProvider>
  <div>
    <main>
      <Route exact path="/" component={Registration} />
    </main>
  </div>
  </MuiThemeProvider>
)

export default App