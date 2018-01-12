import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from '../LoginPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Register from '../Registration/register.js';
import StepTwo from '../setProfile/stepTwo.js';
import StepLast from '../setProfile/stepLast.js';
import SideMenu from '../side-menu/sidemenu.js';
import Header from '../Header';
import Settings from '../profile-settings/profile-settings';
import chatAreaMessages from '../chatArea/chatAreaMessages.js';
import loginUser from '../LoginUser';

const App = () => (
  
  <MuiThemeProvider>
  <div>
    <main>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/step-two" component={StepTwo} />
      <Route exact path="/last-step" component={StepLast} />
      <Route exact path="/sidemenu" component={SideMenu} />
      <Route exact path="/profile-settings" component={Settings} />
      <Route exact path="/chatareamessages" component={chatAreaMessages} />
      <Route exact path="/loginUser" component={loginUser} />
    </main>
  </div>
  </MuiThemeProvider>
)

export default App