import React, { Component } from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import "./settings.css";
const settings = props => (
    <div className="background">
      <div className="Settings">
          <div className="oval"></div>
          <div>
            <h1>Addie Hogan <i className="fa fa-pencil" id= "username" aria-hidden="true"></i></h1>
          </div>
          <h3>addiehogan@gmail&#46;com <i className="fa fa-pencil" id= "email" aria-hidden="true"></i></h3>
          <form >
            <div>
              <br/><RaisedButton label = "Done" className="button" id = "done" labelColor="#fff"/>
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
