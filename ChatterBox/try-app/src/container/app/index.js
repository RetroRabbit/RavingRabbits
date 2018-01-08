import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from '../LoginPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Register from '../Registration/register.js'
import StepTwo from '../setProfile/stepTwo.js'
import StepLast from '../setProfile/stepLast.js'
import Home from '../Sidemenu/sidemenu.js'
import Header from '../Header'
import SideMenu from '../Sidemenu/sidemenu.js'
import Settings from '../settings/settings.js'


const App = () => (
  <MuiThemeProvider>
  <div>

    <main>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/step-two" component={StepTwo} />
      <Route exact path="/last-step" component={StepLast} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/header" component={Header} />
      <Route exact path="/sidemenu" component={SideMenu} />
      <Route exact path="/settings" component={Settings} />

    </main>
  </div>
  </MuiThemeProvider>
)

export default App