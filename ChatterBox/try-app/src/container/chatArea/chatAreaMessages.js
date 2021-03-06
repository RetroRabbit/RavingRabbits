import React, { Component } from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import Chip from 'material-ui/Chip'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import "./chatAreaMessages.css"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../Header'
import $ from 'jquery'
import sidemenu from '../side-menu/sidemenu.js'
import SideMenu from '../side-menu/sidemenu.js'



function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
} 

function insertChat(who, text, time = 0){
  var control = "";
  var date = formatAMPM(new Date());
 
  if (who === "me"){
      
      control = '<li style="width:50%">' +
                      '<div class="msj macro">' +
                      '<div class="avatar"><img className="img-circle" style="width:20%;"  /></div>' +
                          '<div class="text text-l">' +
                              '<p>'+ text +'</p>' + 
                              '<p><small><font color="white">'+date+'</font></small></p>' +
                          '</div>' +
                      '</div>' +
                  '</li>';                    
  }else{
      control = '<li style="width:90%;">' +
                      '<div class="msj-rta macro">' +
                          '<div class="text text-r">' +
                              '<p>'+text+'</p>' +
                                '<div>' +
                              '<p><small><font color="white">'+date+'</font></small></p>' +
                                  '</div>' +
                          '</div>' +
                      '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:20%;" /></div>' +                                
                '</li>';
              }
              setTimeout(
                  function(){                        
                      $("ul").append(control);
          
                  }, time);
              
  }
     
  function resetChat()
  {
       $("ul").empty();
  }

        
  const handleKeyPress = (event) => {
      if(event.key ==='Enter'){
            var text2 = document.getElementById('mytext').value;
      if(text2 === "lol"){
            insertChat("you", text2);
            document.getElementById('mytext').value = " ";          
         } else{
            insertChat("me", text2);
            document.getElementById('mytext').value = '';
         }                    
     }
  }
     
class chatArea extends Component{
  constructor(props) {
    super(props);
 
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    
        return(
        
    <div>
        <header><Header/></header>
        <div>
          <SideMenu/>
        </div>
  <MuiThemeProvider>

  <div class="bg ">
    <div class="chatDiv">
             <ul></ul>
    <div class = "enterText">         
      <form>
          <div className="addMessage">
               <FloatingActionButton  disabled={false} className="add">

               <ContentAdd />
              </FloatingActionButton>
          </div>
          <div className= "chatbox">
                  
                <TextField
                    id='mytext' onKeyPress={handleKeyPress}
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
      </form>
     </div> 
    </div>    
 </div>

    </MuiThemeProvider>
      </div>
  );
  }
}
export default chatArea;
    













