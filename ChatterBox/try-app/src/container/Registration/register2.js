import React from 'react'
import FlatButton  from 'material-ui/FlatButton';
import { TextField, RaisedButton } from 'material-ui';
import  {push} from'react-router-redux'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const Register2 = props => (
    <div class="Register">
        <div class="welcome">
            <h2 class="step-two" lableColor="#FFFFFF">Step Two<br/><h2 class="profile-picture">Profile Picture</h2></h2>
           
        </div>
        
        
    
    <div class="rectangle-2">
    <RaisedButton onclick={()=>props.changePage()}label="Next Step" class="btnReg" labelColor="#FFFFFF" />
    <h2 class="skip-for-now" lableColor="#FFFFFF">Skip for now</h2>
    </div>
    <div class="rectangle-2">
   
    </div>
     </div>
)
const mapStateToPros=state =>({})
const mapDispatchToPrpps=dispatch=>bindActionCreators({
    changePage: () =>push('/LoginPage')
    },dispatch)

export default connect(mapStateToPros,mapDispatchToPrpps)(Register2);