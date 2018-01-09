import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


// const styles = {
//   floatingLabelFocusStyle: {
//       color: "#FFFFFF"
 
//   }
// }

const RegisterPage = props => (
    <div class="register">
    <div class="welcome">
    <img src={require('../../img/step-one.png')} class="logo"/>
    </div>
    <div class="txtbox">
    <TextField
    //floatingLabelText="Name"
    Placeholder="Your Name"
    type="text"
    fullWidth="true"
    class="txtwhite"
    //floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
    />
    <TextField
    //floatingLabelText="Email"
    Placeholder="Email"
    type="text"
    fullWidth="true"
    class="txtwhite"
    //floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
    />
    <TextField
    //floatingLabelText="Password"
    Placeholder="Password"
    type="password"
    fullWidth="true"
    class="txtwhite"
    //floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
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