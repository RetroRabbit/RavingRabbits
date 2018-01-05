import React from 'react'
import FlatButton  from 'material-ui/FlatButton';
import { TextField, RaisedButton } from 'material-ui';

const Registration = props => (
    <div class="Register">
        <div class="welcome">
            <h3 class="welcome-to-the">Step One</h3>
            <h2 class="welcome-to-the">THE BASIC</h2>
        </div>
        <div class="txtbox">
        <TextField
         hintText="Your Name"
        floatingLabelText="Name"
        type="text"
        fullWidth="true"
        />
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
        
       
         <RaisedButton label="NEXT STEP" className="btnReg" lableColor="#FFFFFF"/>
         
        </div>
    </div>
)

export default Registration;