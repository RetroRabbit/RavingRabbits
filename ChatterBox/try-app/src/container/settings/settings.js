import React, { Component } from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../Header'

import "./settings.css";
const settings = props => (
    <div className="background">
    <header className="Rectangle-3">
        <Header/>
    </header>
        <div className="Settingss">
        <div className="ovall"></div>
        
        <h1>Addie Hogan <i className="fa fa-pencil" aria-hidden="true"></i></h1>
        <p>addiehogan@gmail&#46;com <i className="fa fa-pencil" id= "email" aria-hidden="true"></i></p>
        <form >
          <div>
            <br/><RaisedButton label = "Done" className="button" id = "done"/>
          </div>
        </form>
      </div>
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
)(settings)
