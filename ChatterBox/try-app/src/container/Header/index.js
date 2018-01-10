import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import { TextField, RaisedButton } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import './header.css';
import { bindActionCreators } from 'redux';
import { setMobileResolution, setDesktopResolution } from '../../helpers/reducerScreen';
import { setProfilePic } from '../../helpers/reducerPfp';
import img from '../../img/Icon.png'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.updateRes = this.updateRes.bind(this);
    this.imageUpload = this.imageUpload.bind(this);
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.updateRes);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateRes);
  }

  updateRes() {
    if (window.innerWidth < 780) {
      return this.props.setMobileResolution();
    }
    else {
      return this.props.setDesktopResolution();
    }
  }
  
 imageUpload(e){
  var preview = document.querySelector('img');
  var file    = e.target.files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
   preview.src = reader.result;
  }, false);
 reader.readAsDataURL(file)
  return this.props.setProfilePic();
 
}


  render() {
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
                <span class="account-dropdown-button user-name">{this.props.userName}</span>
                <div class="account-dropdown-content">
                  <Link to="/profile-settings">Settings</Link>
                  <a href="/login">Log Out</a>
                  <input type="file" id="imgFile" name="imgFile" onChange={this.imageUpload}/>
                </div>
              </div>
              <img class="profile-img" src={this.props.profilePicture} />
              <img src={require('../../img/Icon.png')} />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ screenRes, loginReducer, profilePicReducer }) => {
  return {
    mobile: screenRes.mobile,
    userName: loginReducer.userName,
    profilePicture: profilePicReducer.initialImage
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setMobileResolution,
  setDesktopResolution,
  setProfilePic
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Header);
