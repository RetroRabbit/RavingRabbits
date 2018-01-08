import React from 'react'
import { Route, Link } from 'react-router-dom'
import { TextField, RaisedButton } from 'material-ui'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const LoginPage = props => (

    <div class="login">
        <div class="welcome">
           <img src={require('../../img/logo.png')} class="logo"/>
        </div>

        <div class="txtbox">
            <TextField
            hintText="Email"
            floatingLabelText="Email"
            type="text"
            fullWidth="true"
            class="txtbox"
            />
            <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            fullWidth="true"
            class="txtbox"
            />
            <RaisedButton onClick={() => props.changePage()} 
            class="btnLogin" 
            label="Login" 
            labelColor="#FFFFFF"/>
        </div>

        <div class="login-2">
        <Link class="no-account-yet-get" to="/register">No account yet? Get setup now</Link>
        </div>
    </div>
)

const mapStateToProps = state => ({

})
  
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/step-two')
}, dispatch)
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

