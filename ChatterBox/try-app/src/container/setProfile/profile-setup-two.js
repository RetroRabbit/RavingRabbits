import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { TextField, RaisedButton, FloatingActionButton } from 'material-ui'
import { colors } from 'material-ui/styles'
import { white } from 'material-ui/styles/colors'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SetProfileLogo2 from '../../img/step-two.png'


const profile_setup_two = props => (

    <div class="register">
        <div class="welcome">
            <img src={SetProfileLogo2} class="logo"/>
        </div>
        <div class="circleDiv">
            <button class="btnCircle">+</button>
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
)(profile_setup_two)