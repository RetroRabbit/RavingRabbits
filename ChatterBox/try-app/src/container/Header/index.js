import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import { TextField, RaisedButton } from 'material-ui'
import AppBar from 'material-ui/AppBar'

const Header = props => (
  <div class="header">
    <div class="left-buttons">
      <div class="dropdown">
        <button class="dropbtn btn header-button"><span class="button-label">NEW CHAT</span></button>
        <div class="dropdown-content">
          <TextField
            hintText="Friend's Email"
          />
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn btn header-button"><span class="button-label">NEW GROUP</span></button>
        <div class="dropdown-content">
          <TextField
            hintText="Group Name"
          />
        </div>
      </div>
      <div class="pull-right">
        <div class="account-dropdown">
          <span class="account-dropbtn user-name">Raving Rabbits</span>
          <div class="account-dropdown-content">
            <a href="/settings">Settings</a>
            <a href="/login">Log Out</a>
          </div>
        </div>
        <img id="profile-img" class="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
        <img id="profile-img" class="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
      </div>
    </div>
  </div>
)

export default Header;