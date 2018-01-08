import React, { Component } from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { colors } from 'material-ui/styles'
import { white } from 'material-ui/styles/colors'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RegLogo from '../../img/step-one.png'


const RegisterPage = props => (
    <div class="register">
    <div class="welcome">
    <img src={RegLogo} class="logo"/>
    </div>
    <div class="txtbox">
    <TextField
    floatingLabelText="Your Name"
    type="text"
    fullWidth="true"
    class="txtwhite"
    />
    <TextField
    floatingLabelText="Email"
    type="text"
    fullWidth="true"
    class="txtwhite"
    />
    <TextField
    floatingLabelText="Password"
    type="password"
    fullWidth="true"
    class="txtwhite"
    />
    </div>
    <RaisedButton
    class="btnReg" 
    label="NEXT STEP" 
    labelColor="#FFFFFF"
    onClick={() => props.changePage()}
    />
</div>
)

const mapStateToProps = state => ({

})
  
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/login')
}, dispatch)
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage)


