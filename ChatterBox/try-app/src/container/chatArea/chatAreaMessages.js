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
import { bindActionCreators } from '../../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/redux';



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
            this.storeMessage;
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
    this.storeMessage =  this.storeMessage.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  storeMessage(e){
      var text = document.getElementById("myText").value;
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
                        <ul className="list"></ul>
                </div>
                
             <form>
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
                                onKeyPress={handleKeyPress}
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

                    
                        </form>
                


                </div>
       </div>

    </MuiThemeProvider>
 </div>
  );
  }
}

const mapStateToProps = ({myMessage}) =>{
    msg:myMessage.msg
}
const mapDispatchToProps = dispatch =>bindActionCreators({
    new_Message
},dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (chatArea);
    













