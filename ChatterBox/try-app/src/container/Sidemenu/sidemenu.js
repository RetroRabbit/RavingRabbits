import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import logo from './logo.svg';
import pfp from './pfp.png';
import './App.css';
import './index.css'


class Sidemenu extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
           <div id="leftBar">
              <div id="searchDiv">
                      <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
                        <a href="" id="searchbtn"><i class="fa fa-search" aria-hidden="true"></i></a>
              </div>
              <div class="dmDiv">
                <div class="inner">
                    <ListItem
                    disabled={true}
                    leftAvatar={
                      <Avatar src={pfp} />
                    }>
                    Username & Surname
                  </ListItem>
                </div>
                <div class="message">
                  <p>hello mam i have been trying to align this code for very long now pls send help!!</p>
                </div>
              </div>
              <div class="dmDiv">
                <div class="inner">
                    <ListItem
                    disabled={true}
                    leftAvatar={
                      <Avatar src={pfp} />
                    }>
                    Image Avatar
                  </ListItem>
                </div>
                <div class="message">
                <p>hello mam i have been trying to align this code for very long now pls send help!!</p>
                </div>
              </div>
              <div class="dmDiv">
                <div class="inner">
                    <ListItem
                    disabled={true}
                    leftAvatar={
                      <Avatar src={pfp} />
                    }>
                    Image Avatar
                  </ListItem>
                </div>
                <div class="message">
                  <p>hello mam i have been trying to align this code for very long now pls send help!!</p>
                </div>
              </div>



          </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Sidemenu;
