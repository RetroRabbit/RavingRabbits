import SideMenu from '../side-menu/sidemenu.js'
import Header from '../Header'
import Settings from '../settings/settings.js'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react'
import { Route, Link } from 'react-router-dom'
import sidemenu from '../side-menu/sidemenu.js';

const ChatForm = props => (
    <div>
    <header>
        <Header/>
    </header>

    <div class="row">
        <div class="pull-left">
            <SideMenu/>
        </div>
        <div class="pull-right">
        
        </div>
    </div>
    </div>
)

const mapStateToProps = state => ({

})
  
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/step-two')
}, dispatch)
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatForm)

