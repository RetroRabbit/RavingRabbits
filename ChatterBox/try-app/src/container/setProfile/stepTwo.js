import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { TextField, RaisedButton, FloatingActionButton, FlatButton } from 'material-ui';
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import history from '../../helpers/store'
import { setProfilePic } from '../../helpers/reducerPfp';
import './step.css';

class StepTwo extends React.Component {
    constructor(props) {
        super(props);
        this.imageUpload = this.imageUpload.bind(this);
      }
    imageUpload(e){
        var   file = e.target.files[0];
        var objectURL = window.URL.createObjectURL(file);
        let reader = new FileReader();
        reader.onload = event => {
            this.setState({ profilephoto: event.target.result });
        };
        reader.readAsDataURL(e.target.files[0]);
        this.setState({ hasimg: true });
        return this.props.setProfilePic(objectURL);
       
      }

    changeImg = (e) => {
        console.log(e.target);
        console.log(e.target.files[0]);
    }
    state = {
        profilephoto: '',
        hasimg: false
    };

    render() {
        return (
            <div className="register">
            <div class="welcome">
            <img src={require('../../img/step-two.png')} class="logo"/>
            </div>
                    <div className="pro-pic-placeholder" >
                        {!this.state.hasimg ?
                            <div className="upload-circle">
                                <div className="plus-logo">
                                    <h1 class="addplus"><b>+</b></h1>
                                    <input
                                    type="file"
                                     onChange={
                                        this.imageUpload
                                    }
                                    style={inputimg}
                                />
                                </div>
                                
                            </div>
                            :
                            <img
                                src={this.state.profilephoto}
                                className="pro-pic-jpg"
                                alt="Profile"
                            />
                        }

                    </div>
                <div className="nextBox">
                <Route render={({ history }) => (
                    <FlatButton {...this.props} onClick={() => {
                        this.setState({ logged: false })
                        history.push('/last-step')
                    }}
                        className="next-button-2"
                        label="Next Step" />
                )} />
                </div>
                <br />
                <Route render={({ history }) => (
                    <FlatButton {...this.props} onClick={() => {
                        this.setState({ logged: false })
                        history.push('/last-step')
                    }}
                        className="step-one"
                        label="Skip for now"
                    />
                )} />

            </div>
        );
    }
}
const inputimg = {
    opacity: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%'
};
const mapStateToProps = ({ profilePicReducer }) => {
    return {
      profilePicture: profilePicReducer.initialImage
    };
  }

const mapDispatchToProps = dispatch => bindActionCreators({
    setProfilePic
  }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(StepTwo);
