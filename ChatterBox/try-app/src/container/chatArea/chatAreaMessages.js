import React, { Component } from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import Chip from 'material-ui/Chip'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import "./chatAreaMessages.css"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../Header'
import sidemenu from '../side-menu/sidemenu.js'
import SideMenu from '../side-menu/sidemenu.js'


class chatArea extends Component{
  render(){
    return(
        
      <div>
        <header><Header/></header>
        <div><SideMenu/></div>
        <MuiThemeProvider>
     
     
      <div class="bg ">
      <div class="chatDiv">
      <div class= "p1">
                  <div className= "rectangle-6">
                      <p className= "text"> Hello </p>
                 </div>
                 <div>
                      <p className= "time"> 17:00</p>
                 </div>
                 <div className= "rectangle-6-copy">
                      <p className= "text"> Hello WORLD </p>
                 </div>
                 <div>
                      <p className= "time"> 17:00</p>
                 </div>
      </div>
      <div className= "person2">
                  <div className= "rectangle-6-copy-2">
                      <p className= "text"> Hello </p>
                 </div>
                 <div>
                      <p className= "time-copy"> 17:00</p>
                 </div>
      </div>
      <div id="chatUtility">
      <div className="addMessage">
    
    <FloatingActionButton  disabled={false} className="add">
              <ContentAdd />
            </FloatingActionButton>
      </div>
      <div className= "chatbox">
                  
                   <TextField
                      className = "chatfield"
                       hintText="Enter your text here!"
                       multiLine={true}
                       style = {{
                         paddingLeft:'20px',
                         paddingRight:'20px',
                          borderRadius: '200px',
                          backgroundColor: '#EAEAEA',
                          width:'80%',
                         }}/>
                 
         </div>
         </div>
      </div>
    </div>
    </MuiThemeProvider>
    </div>
  );
  }
}
export default chatArea;
    













