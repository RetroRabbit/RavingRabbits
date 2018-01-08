import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import pfp from './pfp.png';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import SearchBar from 'material-ui-search-bar-enhanced';


import './sideMenu.css'
const chip = (
  <div class="inner"> 
                <Chip
                 class="myChip"
                    >
                  <Avatar src={pfp} />
                  Username and surname
                </Chip>
                 </div> 
);

class Sidemenu extends Component {
  render() {
    return (
      
      <MuiThemeProvider>
        
      <div className="App">
          <div id="leftBar">
  

               <div id="searchDiv">
                      <SearchBar class="materialSearch"
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                      />
                      {/* <input type="text" class="searchTerm" placeholder="Search Chats"></input>
                        <a href="" id="searchbtn"><i class="fa fa-search" aria-hidden="true"></i></a> */}
              </div>         
      <List class="list">
        
        <Subheader>Today</Subheader>
        <ListItem
        children={chip}
          // leftAvatar={<Avatar src={pfp}/>}
          // primaryText="Brendan Lim"
          secondaryText={
            <p>
              {/* <span style={{color: darkBlack}}>Brunch this weekend?</span><br /> */}
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
        children={chip}
          // leftAvatar={<Avatar src={pfp} />}
          // primaryText="me, Scott, Jennifer"
          secondaryText={
            <p>
              {/* <span style={{color: darkBlack}}>Summer BBQ</span><br /> */}
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
        children={chip}
          // leftAvatar={<Avatar src={pfp} />}
          // primaryText="Grace Ng"
          secondaryText={
            <p>
              {/* <span style={{color: darkBlack}}>Oui oui</span><br /> */}
              Do you have any Paris recs? Have you ever been?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
        children={chip}
          // leftAvatar={<Avatar src={pfp} />}
          // primaryText="Kerem Suer"
          secondaryText={
            <p>
              {/* <span style={{color: darkBlack}}>Birthday gift</span><br /> */}
              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
        children={chip}
          // leftAvatar={<Avatar src={pfp}/>}
          // primaryText="Raquel Parrado"
          secondaryText={
            <p>
              {/* <span style={{color: darkBlack}}>Recipe to try</span><br /> */}
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
                <ListItem
        children={chip}
          // leftAvatar={<Avatar src={pfp}/>}
          // primaryText="Raquel Parrado"
          secondaryText={
            <p>
              {/* <span style={{color: darkBlack}}>Recipe to try</span><br /> */}
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
                <ListItem
        children={chip}
          // leftAvatar={<Avatar src={pfp}/>}
          // primaryText="Raquel Parrado"
          secondaryText={
            <p>
              {/* <span style={{color: darkBlack}}>Recipe to try</span><br /> */}
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
 

      {/* <List>
        <Subheader>Today</Subheader>
        <ListItem
          leftAvatar={<Avatar src={pfp} />}
          primaryText="Brunch this weekend?"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Brendan Lim</span> --
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src={pfp} />}
          primaryText={
            <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
          }
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src={pfp} />}
          primaryText="Oui oui"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Grace Ng</span> --
              Do you have Paris recommendations? Have you ever been?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src={pfp} />}
          primaryText="Birdthday gift"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Kerem Suer</span> --
              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src={pfp} />}
          primaryText="Recipe to try"
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Raquel Parrado</span> --
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
      </List> */}

              {/* <div class="dmDivActive">
                 <div class="inner"> 
                <Chip
                class="myChip"
                    >
                  <Avatar src={pfp} />
                  Username and surname
                </Chip>
                </div> 
                <div class="message">
                  <p>hello mam i have been trying to align this code for very long now pls send help!!</p>
                </div>
              </div>
              <div class="dmDiv">
                <div class="inner">
                <Chip
                 class="myChip"
                    >
                  <Avatar src={pfp} />
                  Username and surname
                </Chip>
              </div> 
                <div class="message">
                <p>hello mam i have been trying to align this code for very long now pls send help!!</p>
                </div>
              </div>
              <div class="dmDiv">
               <div class="inner"> 
                <Chip
                 class="myChip"
                    >
                  <Avatar src={pfp} />
                  Username and surname
                </Chip>
                 </div> 
                <div class="message">
                  <p>hello mam i have been trying to align this code for very long now pls send help!!</p>
                </div>
              </div>
 */}


          </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Sidemenu;
