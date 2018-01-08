import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { TextField, RaisedButton } from 'material-ui';
import AppBar from 'material-ui/AppBar';

const Header = props => (
    <div class="header">
        <div class="left-buttons">
            <button class="btn header-button">
                <span class="button-label">NEW CHAT</span>
            </button>
            <button class="btn header-button">
                <span class="button-label">NEW GROUP</span>
            </button>
            <div class="pull-right">
                <span class="user-name">Johan Laubscher</span>
                <img
                    id="profile-img"
                    class="profile-img"
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                />
                <img
                    id="profile-img"
                    class="profile-img"
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                />
            </div>
        </div>
    </div>
);

export default Header;
