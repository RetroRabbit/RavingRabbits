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
import { setProfilePic } from '../../helpers/reducerPfp';

let userName = '';
class settings extends React.Component {
    constructor(props) {
        super(props);
        this.imageUpload = this.imageUpload.bind(this);
    }

    updateNames(email, userName) {
        
        this.props.updateName(userName, email);
    }
    imageUpload(e){
        var   file = e.target.files[0];
        var objectURL = window.URL.createObjectURL(file);
        console.log(this.props);
        return this.props.setProfilePic(objectURL);
       
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
                        <img src={this.props.profilePicture} className="profile img-circle" />
                        <h1  contentEditable="true" id="username">{this.props.userName}</h1>  
                        <h3  contentEditable="true" id="email">{this.props.email} </h3>
                        
                        <h1><i className="fa fa-pencil" aria-hidden="true" /></h1>
                        <h3><i className="fa fa-pencil" id="email" aria-hidden="true"/></h3>
                    </div>
                    <div class="uploadButtonImg">
                         <input  
                                    style={{
                            
                                    }}
                                    type="file"
                                     onChange={
                                        this.imageUpload
                                    }
                                /> 
                    </div>
                    <form>
                        <div>

                            <br />
                            <RaisedButton
                                onClick={() => this.updateNames( document.getElementById("username").innerText ,document.getElementById("email").innerText) }
                                label="Done"
                                className="button"
                                id="done"
                                labelColor="rgb(255,255,255)"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};


const mapStateToProps = ({ loginReducer,profilePicReducer }) => {
    return {
        userName: loginReducer.userName,
        email: loginReducer.email,
        profilePicture: profilePicReducer.initialImage 
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/chatareamessages'),
    updateName,
    setProfilePic
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(settings);