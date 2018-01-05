import React from 'react'
import { TextField, RaisedButton } from 'material-ui'



const LoginPage = props => (
    <div class="login">
        <div class="welcome">
            <h2 class="welcome-to-the">Welcome to the</h2>
            <img src={require('./Full_Logo.png')}/>
        </div>
        <div class="txtbox">
        <TextField
         hintText="Email"
        floatingLabelText="Email"
        type="text"
        fullWidth="true"
        />
        <TextField
         hintText="Password"
        floatingLabelText="Password"
        type="password"
        fullWidth="true"
        />
       
         <RaisedButton label="Login" class="btnLogin" labelColor="#FFFFFF" />
        
        </div>
        <div class="rectangle-2">
            <h1 class="no-account-yet-get">No account yet? Get setup now</h1>
         </div>
    </div>
)


export default LoginPage;