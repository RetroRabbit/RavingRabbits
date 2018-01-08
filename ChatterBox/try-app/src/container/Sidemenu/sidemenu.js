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
import { blue300, indigo900 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import SearchBar from 'material-ui-search-bar-enhanced';

import './sideMenu.css';
const chip = (
    <div class="inner">
        <Chip class="myChip">
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
                            <SearchBar
                                class="materialSearch"
                                onChange={() => console.log('onChange')}
                                onRequestSearch={() => console.log('onRequestSearch')}
                            />
                        </div>
                        <List class="list">
                            <Subheader>Today</Subheader>
                            <ListItem
                                children={chip}
                                secondaryText={
                                    <p>
                                        I&apos;ll be in your neighborhood doing errands this
                                        weekend. Do you want to grab brunch?
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            <Divider inset={false} />
                            <ListItem
                                children={chip}
                                secondaryText={
                                    <p>Wish I could come, but I&apos;m out of town this weekend.</p>
                                }
                                secondaryTextLines={2}
                            />
                            <Divider inset={false} />
                            <ListItem
                                children={chip}
                                secondaryText={
                                    <p>Do you have any Paris recs? Have you ever been?</p>
                                }
                                secondaryTextLines={2}
                            />
                            <Divider inset={false} />
                            <ListItem
                                children={chip}
                                secondaryText={
                                    <p>
                                        Do you have any ideas what we can get Heidi for her
                                        birthday? How about a pony?
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            <Divider inset={false} />
                            <ListItem
                                children={chip}
                                secondaryText={
                                    <p>
                                        We should eat this: grated squash. Corn and tomatillo tacos.
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            <ListItem
                                children={chip}
                                secondaryText={
                                    <p>
                                        We should eat this: grated squash. Corn and tomatillo tacos.
                                    </p>
                                }
                                secondaryTextLines={2}
                            />
                            <ListItem
                                children={chip}
                                secondaryText={
                                    <p>
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

export default Sidemenu;
