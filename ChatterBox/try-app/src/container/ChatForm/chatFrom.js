import SideMenu from '../side-menu/sidemenu.js'
import Header from '../Header'
import Settings from '../profile-settings/profile-settings'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react'
import { Route, Link } from 'react-router-dom'
import sidemenu from '../side-menu/sidemenu.js'
import chatAreaMessages from '../chatArea/chatAreaMessages';

const ChatForm = props => (
    <div>
    <header>
        <Header/>
    </header>
    <div class="row">
        <div>>
            <SideMenu/>
        </div>
        <div>
            <chatAreaMessages/>
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

