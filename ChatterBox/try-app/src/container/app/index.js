import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from '../LoginPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Register from '../Registration/register.js'
import StepTwo from '../setProfile/stepTwo.js'
import StepLast from '../setProfile/stepLast.js'
import chatForm from '../chat-form/chat-form.js'
import SideMenu from '../side-menu/sidemenu.js'
import Header from '../Header'
import Settings from '../profile-settings/profile-settings'
import ChatForm from '../ChatForm/chatFrom.js'
import chatAreaMessages from '../chatArea/chatAreaMessages.js';

const App = () => (
  <MuiThemeProvider>
  <div>
    <main>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/step-two" component={StepTwo} />
      <Route exact path="/last-step" component={StepLast} />
      <Route exact path="/chat-form" component={chatForm} />
      <Route exact path="/sidemenu" component={SideMenu} />
      <Route exact path="/" component={Header} />
      <Route exact path="/profile-settings" component={Settings} />
      <Route exact path="/chatFrom" component={ChatForm} />
      <Route exact path="/chatAreaMessages" component={chatAreaMessages} />
    </main>
  </div>
  </MuiThemeProvider>
)

export default App