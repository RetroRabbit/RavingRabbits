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
import './sideMenu.css';


const chip = (
  
  <div class="innerDiv"> 
    <Chip class="myChip" style={{
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

class Sidemenu extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    if(isMobile){
      return(
        <div>
           <MuiThemeProvider>
      <div className="App">
          <div id="mleftBar">
               <div id="searchDiv">
                      <input class="materialSearch" 
                          style={{
                            borderRadius: '200px',
                            color: '#4A4A4A',
                          }}
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                      />
              </div>   
    <Divider inset={false} />      
      <List class="list">
        {/* <Subheader>Today</Subheader> */}
          <ListItem
            children={smallchip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              I&apos;ll be in your neighborhood doing errands this weekend.
            </p>
          }
          secondaryTextLines={2}
          />
          <Divider inset={false} />
          <ListItem
            children={smallchip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
            }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
            children={smallchip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              Do you have any Paris recs? Have you ever been?
            </p>
            }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
            children={smallchip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              Do you have any ideas what we can get Heidi?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
            children={smallchip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} /> 
        <ListItem
            children={smallchip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
         <Divider inset={false} /> 
        <ListItem
            children={smallchip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              We should eat this: grated squash. Corn and tomatillo tacosssss. hello mr pickles
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
    </div>
  </div>
  </MuiThemeProvider>
</div>
      );
    }
    else{
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
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                      />
              </div>   
    <Divider inset={false} />      
      <List class="list">
          <ListItem
            children={chip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2}
          />
          <Divider inset={false} />
          <ListItem
            children={chip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
            }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
            children={chip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              Do you have any Paris recs? Have you ever been?
            </p>
            }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
            children={chip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
        <ListItem
            children={chip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
        <ListItem
            children={chip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
        <ListItem
            children={chip}
            secondaryText={
            <p style={{padding:'20px 20px',
            textAlign:'left',
            height:'auto'}}>
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
    </div>
  </div>
  </MuiThemeProvider>
    );
  }
}
}

export default Sidemenu;
