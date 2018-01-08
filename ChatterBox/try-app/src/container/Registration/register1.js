import React from 'react'
import FlatButton  from 'material-ui/FlatButton';
import { TextField, RaisedButton } from 'material-ui';
import  {push} from'react-router-redux'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const register1 = props => (
    <div class="Register">
        <div class="welcome">
            <h2 class="step-one" lableColor="#FFFFFF">Step one<br/><h1 class="your-first-chat ">The Basic</h1></h2>
           
        </div>
        <div class="rectangle">
        <div class="txtbox">
        <TextField
         hintText="Name"
        floatingLabelText="Your Name"
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
       
         </div>
        </div>
        <div class="rectangle-2">
        <RaisedButton onclick={()=>props.changePage()}label="Next Step" class="btnReg" labelColor="#FFFFFF" />
        
         </div>
         
    </div>
)
const mapStateToPros=state =>({})
const mapDispatchToPrpps=dispatch=>bindActionCreators({
    changePage: () =>push('/LoginPage')
    },dispatch)

export default connect(mapStateToPros,mapDispatchToPrpps)(register1);