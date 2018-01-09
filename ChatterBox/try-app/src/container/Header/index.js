import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { TextField, RaisedButton } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import './header.css';
import { bindActionCreators } from 'redux';
import {setMobileResolution, setDesktopResolution} from '../../helpers/reducerScreen';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.updateRes = this.updateRes.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.updateRes);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateRes);
  }

  updateRes() {
    if (window.innerWidth< 780) {
      return this.props.setMobileResolution();
    }
    else {
      return this.props.setDesktopResolution();
    }
  }

  render() {
    console.log('f');
    if (this.props.mobile) {
      return (
        <div class="header">
           <div class="left-header-buttons">
             <div class="dropdown">
               <button class="dropdown-button btn header-button"><span class="header-button-label">NEW CHAT</span></button>
               <div class="dropdown-content">
                 <TextField
                   hintText="Friend's Email"
                 />
               </div>
             </div>
             <div class="dropdown">
               <button class="dropdown-button btn header-button"><span class="header-button-label">NEW GROUP</span></button>
               <div class="dropdown-content">
                 <TextField
                   hintText="Group Name"
                 />
               </div>
             </div>
             <div class="pull-right">
               <span class="account-dropdown-button user-name"><span class="glyphicon glyphicon-chevron-right"></span></span>
             </div>
           </div>
          </div>
      );
    } else {
      return (
        <div class="header">
          <div class="left-header-buttons">
            <div class="dropdown">
              <button class="dropdown-button btn header-button"><span class="header-button-label">NEW CHAT</span></button>
              <div class="dropdown-content">
                <TextField
                  hintText="Friend's Email"
                />
              </div>
            </div>
            <div class="dropdown">
              <button class="dropdown-button btn header-button"><span class="header-button-label">NEW GROUP</span></button>
              <div class="dropdown-content">
                <TextField
                  hintText="Group Name"
                />
              </div>
            </div>
            <div class="pull-right">
              <div class="account-dropdown">
                <span class="account-dropdown-button user-name">Raving Rabbits</span>
                <div class="account-dropdown-content">
                  <a href="/profile-settings">Settings</a>
                  <a href="/login">Log Out</a>
                </div>
              </div>
              <img id="profile-img" class="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
              <img id="profile-img" class="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = ({screenRes}) => {
  return {
    mobile: screenRes.mobile
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setMobileResolution,
    setDesktopResolution
  }, dispatch);


  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
