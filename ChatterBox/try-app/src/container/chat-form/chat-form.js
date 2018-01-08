import Header from '../Header/'
import Home from '../side-menu/sidemenu.js'
import React from 'react';
import { Route, Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const chatFrom = props => (

    <div class="">
        <div class="row">
            <header>
                <Header/>
            </header>
        </div>
        
        <div class="row">
            <div class="pull-left col-md-6">
                <Home/>
            </div>
            <div class="pull-right col-md-6">
                <h1>hello</h1>
            </div>

        </div>
    </div>
    
)
  
  
export default connect(
)(chatFrom)
