import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { TextField, RaisedButton, FloatingActionButton } from 'material-ui';
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const step_two = props => (

    <div class="register">
        <div class="welcome">
            <img src={require('../../img/step-two.png')} class="logo"/>
        </div>
        <div class="circleDiv">
            <button
            class="btnCircle"
            >+</button>
        </div>
        <div>
            <RaisedButton
            class="btnStepTwo" 
            label="NEXT STEP" 
            labelColor="#FFFFFF"
            onClick={() => props.changePage()}
            />
        </div>
        <div class="skip">
            <Link class="skip" to="/last-step">Skip for now</Link>
        </div>
    </div>
)

const mapStateToProps = state => ({
})
  
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/last-step')
}, dispatch)
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(step_two)