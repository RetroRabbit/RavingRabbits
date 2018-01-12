import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { TextField, RaisedButton } from 'material-ui';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../helpers/reducerAccount';
import { accountReducer } from '../../helpers/reducerAccount';
import history from '../../helpers/store.js';

class LoginPage extends Component {

    constructor(props) {
      super(props);
      this.state = {};
      this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(newProps) {      
      if(newProps.isLoginSuccess){
        newProps.redirect();
      }
    }
  
    render() {
      let {email, password} = this.state;
      let {isLoginPending, isLoginSuccess, loginError} = this.props;
      return (
        <form name="loginForm" onSubmit={this.onSubmit}>
          <div class="login">
        <div class="welcome">
           <img src={require('../../img/logo.png')} class="logo"/>
        </div>
        <div class="txtbox">
            <div class="form-group">
            <TextField
            hintText="Email"
            floatingLabelText="Email"
            type="text"
            fullWidth="true"
            class="txtbox"
            type="email" 
            onChange={e => this.setState({email: e.target.value})} 
            value={email}
            />
            </div>
            <div class="form-group">
            <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            fullWidth="true"
            class="txtbox"
            name="password" 
            onChange={e => this.setState({password: e.target.value})} 
            value={password}
            />
            </div>
            <div class="form-group">
            <RaisedButton 
            class="btnLogin" 
            label="Login" 
            labelColor="#FFFFFF"
            type="submit" 
            value="Login" />
            </div>
        </div>
        <div className="login-2">
        <Link className="no-account-yet-get" to="/register">No account yet? Get setup now</Link>
        <div className="message">
            { isLoginPending && <div>Please wait...</div> }
            { 
              isLoginSuccess ? 
              <div>Success.</div> 
              :
              <p></p> 
            }
            { loginError && <div>{loginError.message}</div> }
          </div>
        </div>
    </div>     
    </form>
      )
    }
  
    onSubmit(e) {
      e.preventDefault();
      let { email, password } = this.state;
      this.props.login(email, password);
      this.setState({
        email: '',
        password: ''
      });  
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      isLoginPending: state.accountReducer.isLoginPending,
      isLoginSuccess: state.accountReducer.isLoginSuccess,
      loginError: state.accountReducer.loginError
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (email, password) => dispatch(login(email, password)),
      redirect: () => dispatch(push("/chatareamessages"))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);



