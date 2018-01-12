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
import { new_Message, myMessage } from '../../helpers/myChat'
import { reducerConversation, sendMessage } from '../../helpers/reducerConversation'
import { bindActionCreators } from 'redux';

class chatArea extends Component {
  constructor(props) {
    super(props);
    this.storeMessage = this.storeMessage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      var text2 = document.getElementById('mytext').value;
      this.storeMessage(text2);
      document.getElementById('mytext').value = '';
    }
  }

  storeMessage(text) {
    this.props.sendMessage(this.props.currentConvoID, document.getElementById("mytext").value);
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <header><Header /></header>
        <div>
          <SideMenu />
        </div>
        <MuiThemeProvider>
          <div class="bg">
            <div class="chatDiv">
              <div class="messageList">
                {(this.props.messages.length) ?
                  <ul className="list" id="list">
                    {this.props.messages.map(item => (
                      <li className="listItem">
                      {(item.user == "Johan") ?
                        <div class="p2">
                          <div class="message">
                            <p>{item.msg}</p>
                          </div>
                          <div>
                            <p class="time"></p>
                          </div>
                        </div>
                        :
                        <div class="p1">
                          <div class="message">
                            <p>{item.msg}</p>
                          </div>
                          <div>
                            <p class="time"></p>
                          </div>
                        </div>
                      }
                      </li>
                    ))}
                  </ul> : 
                  <div></div>
                }
              </div>
              <div class="addText">
                <div class="addMessage">
                  <FloatingActionButton disabled={false} className="submitMsg"
                    backgroundColor="#D8D8D8"
                  >
                    <ContentAdd />
                  </FloatingActionButton>
                </div>
                <div className="chatbox">
                  <TextField
                    id='mytext'
                    onKeyPress={this.handleKeyPress}
                    className="chatfield"
                    hintText="Enter your text here!"
                    multiLine={true}
                    style={{
                      paddingLeft: '20px',
                      paddingRight: '20px',
                      borderRadius: '200px',
                      backgroundColor: '#EAEAEA',
                      width: '100%',
                    }} />
                </div>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ reducerConversation }) => {
  return {
    messages: reducerConversation.filteredMessages,
    currentConvoID: reducerConversation.currentConvoID
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  sendMessage
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(chatArea);