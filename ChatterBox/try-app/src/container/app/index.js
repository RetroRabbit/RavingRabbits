import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from '../LoginPage';
import Registration from '../Registration/register1';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import register1 from '../Registration/register1';
import register2 from '../Registration/register2';
import register3 from '../Registration/register3';


const App = () => (
  <MuiThemeProvider>
  <div>
    <main>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/" component={register1} /> 
    <Route exact path="/" component={register2} /> 
    <Route exact path="/" component={register3} /> 
    </main>
  </div>
  </MuiThemeProvider>
)

export default App