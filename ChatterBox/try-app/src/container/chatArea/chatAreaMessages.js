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
import {new_Message} from '../../helpers/myChat'
import { bindActionCreators } from 'redux';



function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;// the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
} 

function insertChat(who, text, time = 0){
  var control = "";
  var date = formatAMPM(new Date());
 
  if (who === "me"){
      control = '<li>' +
                      '<div class="p1">' +
                            '<div class="message">' +
                              '<p>'+ text +'</p>' + 
                            '</div>' +
                        '<div>' +
                              '<p class="time">'+date+'</p>' +
                        '</div>' +
                      '</div>' +
                '</li>';                    
  }
              setTimeout(
                  function(){                        
                      $("#list").append(control);
          
                  }, time);
              
  }
     
  function resetChat()
  {
       $("ul").empty();
  }

   

        
     
class chatArea extends Component{
  constructor(props) {
    super(props);
    this.storeMessage =  this.storeMessage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleKeyPress = (event) => {
    if(event.key ==='Enter'){
          var text2 = document.getElementById('mytext').value;
          console.log(text2)
          this.storeMessage(text2);
    if(text2 === "lol"){
          insertChat("you", text2);
          this.storeMessage();
          document.getElementById('mytext').value = " ";          
       } else{
          insertChat("me", text2);
          var text2 = document.getElementById('mytext').value;
          console.log(text2)
          this.storeMessage;
          document.getElementById('mytext').value = '';
       }                    
   }
}


  storeMessage(text){
      var text = document.getElementById("mytext").value;
      return this.props.new_Message(text);
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
       
  <div class="bg">
                <div class="chatDiv">
                <div class= "messageList">
                        <ul className="list" id="list"></ul>
                </div>
               <div class = "addText">             
                    <div class="addMessage">
                        
                                <FloatingActionButton  disabled={false} className = "submitMsg"
                                  backgroundColor="#D8D8D8"                              
                                    >
                                    <ContentAdd />
                                </FloatingActionButton>
                  </div>
                  <div className= "chatbox">
                            <TextField
                                id='mytext' 
                                onKeyPress={this.handleKeyPress}
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

const mapStateToProps = ({myMessage}) =>{
  return
    myMessage:myMessage.newMsg
}
const mapDispatchToProps = dispatch =>bindActionCreators({
    new_Message
},dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (chatArea);
    













