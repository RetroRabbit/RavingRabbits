import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../Header';
import { updateName } from '../../helpers/reducerLogin';
import './profile-settings.css';

let userName = '';
class settings extends React.Component {
    constructor(props) {
        super(props);
    }

    updateNames(email, userName) {
        
        this.props.updateName(userName, email);
    }

    render() {
        return (
            <div className="whiteBackground">
                <header className="Rectangle-3">
                    <Header />
                </header>
                <div class="row">
                    <div class="topSection">
                        <img src={require('./Oval.png')} className="img-circle center-block" />
                        <img src={require('./mypic.JPG')} className="profile img-circle" />
                        
                        <h1  contentEditable="true" id="username">{this.props.userName}</h1>  
                        <h3  contentEditable="true" id="email">{this.props.email}</h3>
                       <h1><i className="fa fa-pencil" aria-hidden="true" /></h1>
                        <h3><i className="fa fa-pencil" id="email" aria-hidden="true"/></h3>
                    </div>
                    <form>
                        <div>
                            <br />
                            <RaisedButton
                                onClick={() => this.updateNames( document.getElementById("username").innerText ,document.getElementById("email").innerText) }
                                label="Done"
                                className="button"
                                id="done"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ loginReducer }) => {
    return {
        userName: loginReducer.userName,
        email: loginReducer.email
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/chatareamessages'),
    updateName
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(settings);