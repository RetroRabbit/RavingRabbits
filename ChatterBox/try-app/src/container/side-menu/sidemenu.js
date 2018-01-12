import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import pfp from './pfp.png';
import Divider from 'material-ui/Divider';
import SearchBar from 'material-ui-search-bar-enhanced';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { reducerConversation, selectChat,updateConversations } from '../../helpers/reducerConversation';
import './sideMenu.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const cardHeaderStyle = {
    backgroundColor: '#EAEAEA',
    backgroundClip: 'content-box',
    borderRadius: '50px',
    padding: '20px'
};

const cardHeaderTextStyle = {
    paddingTop: '3%',
};

const cardTextStyle = {
    padding: '0px 160px 35px 16px'
};

class Sidemenu extends Component {
    constructor(props) {
        super(props);
        this.filterList = this.filterList.bind(this);
        this.selectChat = this.selectChat.bind(this);
        this.conversations = this.props.conversations;
        this.getConvos = this.getConvos.bind(this);
        this.getConvos();
    }

    filterList = function (text) {
        var updatedList = this.props.conversations;
        this.conversations = updatedList.filter(function (item) {
            return item.user2.toLowerCase().search(text.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    };

    getConvos(){
        axios.get(`http://localhost:60387/api/conversations`)
        .then(res => {
           this.props.updateConversations(res.data);
           this.conversations = this.props.conversations;
           this.forceUpdate();
        });
    }

    selectChat = function (ID) {
        this.props.selectChat(ID);
        this.forceUpdate()
    }

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
                        <ul className="defaultList">
                            {this.conversations.map(chat => (
                                <li data-category={chat} key={chat.conversationID}>
                                    {(chat.selected) ?
                                        <div>
                                            <Card style={{
                                                textAlign: 'left',
                                                backgroundColor: '#F5F5F5',
                                                paddingLeft: '20px'
                                            }} onClick={() => this.selectChat(chat.conversationID)}>
                                                <CardHeader
                                                    title={chat.user_1}
                                                    avatar={'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png'}
                                                    style={cardHeaderStyle}
                                                    textStyle={cardHeaderTextStyle}
                                                />
                                                <CardText style={cardTextStyle}>{chat.text}</CardText>
                                            </Card>
                                        </div>
                                        :
                                        <div>
                                            <Card
                                                style={{
                                                    textAlign: 'left',
                                                    paddingLeft: '20px'
                                                }} onClick={() => this.selectChat(chat.conversationID)}>
                                                <CardHeader
                                                    title={chat.user_1}
                                                    avatar={'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png'}
                                                    style={cardHeaderStyle}
                                                    textStyle={cardHeaderTextStyle}
                                                />
                                                <CardText style={cardTextStyle}>{chat.text}</CardText>
                                            </Card>
                                        </div>
                                    }
                                </li>))}
                        </ul>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = ({ reducerConversation }) => {
    return {
        conversations: reducerConversation.conversations
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    selectChat,
    updateConversations
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);