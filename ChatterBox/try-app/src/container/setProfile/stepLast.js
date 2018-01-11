import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { TextField, RaisedButton, FloatingActionButton } from 'material-ui';
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = {
    floatingLabelFocusStyle: {
        color: "#FFFFFF"
    
    }
    
  }
  

const step_last = props => (

    <div class="register">
        <div class="welcome">
            <img src={require('../../img/step-last.png')} class="logo"/>
        </div>
        <div class="circleDiv">
            <TextField
            Placeholder="Friends Email"
            type="text"
            fullWidth="true"
            class="txtwhite"
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
            />
        </div>
        <div>
            <RaisedButton
            class="laststepbtn" 
            label="START CHAT!" 
            labelColor="#FFFFFF"
            onClick={() => props.changePage()}
            />
        </div>
        <div class="skiplast">
            <Link class="skiplast" to="/chatareamessages">Skip for now</Link>
        </div>
    </div>
)

const mapStateToProps = state => ({

})
  
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/chatareamessages')
}, dispatch)
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(step_last)