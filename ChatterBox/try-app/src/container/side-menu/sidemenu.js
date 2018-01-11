import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import pfp from './pfp.png';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import SearchBar from 'material-ui-search-bar-enhanced';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import './sideMenu.css';

const chip = (
  
  <div class="innerDiv"> 
    <Chip class="myChip" id="personCard" style={{
                            borderRadius: '200px',
                            padding: '5px 5px'
                          }}>
      <Avatar src={pfp} />
         Username and Surname
    </Chip>
  </div> 
);
const smallchip = (
  <div class="innerDivSmall"> 
    <Chip class="mySmallChip"  style={{
                            borderRadius: '200px',
                            padding: '5px 5px'
                          }}
    >
      <Avatar src={pfp} />
         Username And Surname
    </Chip>
  </div> 
);
const cardHeaderStyle = {
  backgroundColor: '#EAEAEA',
  backgroundClip: 'content-box',
  borderRadius: '50px',
  padding:'20px'
};

const cardHeaderTextStyle = {
  paddingTop: '3%',
};

const cardTextStyle = {
  padding: '0px 160px 35px 16px'
};

const ChatCard = function(props) {
  if (props.selected) {
      return (
          <div>
              <Card
                  style={{
                    textAlign:'left',
                      backgroundColor: '#F5F5F5',
                      paddingLeft:'20px'
                  }}
              >
                  <CardHeader
                      title={props.title}
                      avatar={props.avatar}
                      style={cardHeaderStyle}
                      textStyle={cardHeaderTextStyle}
                  />
                  <CardText style={cardTextStyle}>{props.text}</CardText>
              </Card>
          </div>
      );
  } else {
      return (
          <div>
              <Card 
                           style={{
                            textAlign:'left',
                              paddingLeft:'20px'
                          }}>

                  <CardHeader

                      title={props.title}
                      avatar={props.avatar}
                      style={cardHeaderStyle}
                      textStyle={cardHeaderTextStyle}
                  />
                  <CardText style={cardTextStyle}>{props.text}</CardText>
              </Card>
          </div>
      );
  }
};

const List = function(props) {
  const chatMsgs = props.chatList;
  const listItems = chatMsgs.map(chat => (
      <li data-category={chat} key={chat}>
          <ChatCard
              title={chat.title}
              avatar={chat.avatar}
              text={chat.text}
              selected={chat.selected}
          />
      </li>
  ));
  return <ul className="defaultList">{listItems}</ul>;
};

const initialItems = [
  {
      title: 'HD Haasbroek',
      avatar:
          'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
      text:
          'I&apos;ll be in your neighborhood doing errands this weekend.',
      selected: true
  },
  {
      title: 'Ash',
      avatar:
          'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
      text: '  Wish I could come, but I&apos;m out of town this weekend.',
      selected: false
  },
  {
      title: 'Lunga',
      avatar:
          'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
      text:
          ' Do you have any Paris recs? Have you ever been?',
      selected: false
  },
  {
      title: 'Johan',
      avatar:
          'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
      text:
          'Do you have any ideas what we can get Heidi?',
      selected: false
  },
  {
      title: 'Law',
      avatar: 'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
      text:
          '    We should eat this: grated squash. Corn and tomatillo tacos.',
      selected: false
  },
  {
    title: 'Non',
    avatar: 'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
    text:
        '    We should eat this: grated squash. Corn and tomatillo tacos.',
    selected: false
}
];


class Sidemenu extends Component {
      constructor(props) {
        super(props);       
        this.filterList = this.filterList.bind(this);
        this.state = { initialItems: initialItems, items: initialItems };
    }
    filterList = function(text) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item) {
            return item.title.toLowerCase().search(text.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    };
  
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
          <div id="leftBar">
               <div id="searchDiv">
                      <SearchBar class="materialSearch" 
                          style={{
                            borderRadius: '200px',
                            color: '#4A4A4A',
                          }}
                        onChange={text => this.filterList(text)}
                      />
              </div>   
    <Divider inset={false} />     
    <List chatList={this.state.items} />              
    </div>
  </div>
  </MuiThemeProvider>
    );
  }
}

export default Sidemenu;
