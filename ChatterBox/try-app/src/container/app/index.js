import React from 'react'
import { Route, Link } from 'react-router-dom'
import LoginPage from '../LoginPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Register from '../Registration/register.js'
import StepTwo from '../setProfile/profile-setup-two.js'
import StepLast from '../setProfile/profile-setup-last.js'

const App = () => (
  <MuiThemeProvider>
  <div>
    <main>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/step-two" component={StepTwo} />
      <Route exact path="/last-step" component={StepLast} />
    </main>
  </div>
  </MuiThemeProvider>
)

export default App