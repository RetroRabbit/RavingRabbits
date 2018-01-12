import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { TextField, RaisedButton } from 'material-ui';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import history from '../history';
import Auth from '../auth/auth';

class LoginPage extends Component {
  
    goTo(route) {
        this.props.history.replace(`/${route}`)
      }
     login() {
    this.props.auth.login();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
      return (
          <div class="login">
        <div class="welcome">

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
            />
            </div>
            <div class="form-group">
            <button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >Log In
                  </button>
            </div>
        </div>
    </div>     
      )
    }
  
  }
  
  const mapStateToProps = (state) => {
    return {
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
    };
  }
  
  export default (LoginPage);