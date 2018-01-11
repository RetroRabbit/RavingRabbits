import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerUser } from '../../helpers/reducerAccount';
import history from '../../helpers/store.js';

class myRegister extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {name,email, password} = this.props;
   
    return (
      <div class="register">
        <div class="welcome">
          <img src={require('../../img/step-one.png')} class="logo" />
        </div>
        <div class="txtbox">
          <TextField
            hintText="Your Name"
            floatingLabelText="Your Name"
            type="text"
            fullWidth="true"
            class="txtbox"
            type="name"
            onChange={e => this.name = e.target.value }
          />
          <TextField
            hintText="Email"
            floatingLabelText="Email"
            type="text"
            fullWidth="true"
            class="txtbox"
            type="email"
            onChange={e => this.email = e.target.value }
          />
          <TextField
            floatingLabelText="Password"
            type="password"
            fullWidth="true"
            class="txtbox"
            name="password"
            onChange={e => this.password = e.target.value }
          />
        </div>
        <RaisedButton
          class="btnReg"
          label="NEXT STEP"
          labelColor="#FFFFFF"
          onClick={this.onSubmit}
        />
      </div>
    )
  }

  onSubmit() {
    this.props.registerUser(this.name,this.email, this.password);
    this.props.redirectToNextStep();
  }
}

const mapStateToProps = state => {
  name: state.name
  email: state.email
  password: state.password
}

const mapDispatchToProps = dispatch => bindActionCreators({
  registerUser,
  redirectToNextStep: () => push('/step-two')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(myRegister)