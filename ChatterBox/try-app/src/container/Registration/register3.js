import React from 'react'
import FlatButton  from 'material-ui/FlatButton';
import { TextField, RaisedButton } from 'material-ui';
import  {push} from'react-router-redux'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const Register3 = props => (
    <div class="Register">
        <div class="welcome">
            <h2 class="last-step">Last Step<h2 class="your-first-chat">Your First Chat</h2></h2>
           
        </div>
        <div class="txtbox">
        <TextField
         hintText="Email"
        floatingLabelText="Email"
        type="text"
        fullWidth="true"
        />
        
        
        </div>
        <div class="rectangle-2">
        <RaisedButton onclick={()=>props.changePage()}label="Next Step" class="btnReg" labelColor="#FFFFFF" />
         </div>
    </div>
)

const mapStateToPros=state =>({})
const mapDispatchToPrpps=dispatch=>bindActionCreators({
    changePage: () =>push('/register1')
    },dispatch)

export default connect(mapStateToPros,mapDispatchToPrpps)(Register3);