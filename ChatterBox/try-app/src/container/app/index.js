import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from '../LoginPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const App = () => (
  <MuiThemeProvider>
  <div>
    <main>
      <Route exact path="/login" component={LoginPage} />
    </main>
  </div>
  </MuiThemeProvider>
)

export default App