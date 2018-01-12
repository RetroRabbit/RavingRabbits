import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../Header';
import './profile-settings.css';
import { accountReducer, updateAccountDetails, setProfilePic,hidePen, hidePenn, showPenn, showPen } from '../../helpers/reducerAccount';

class settings extends React.Component {
    constructor(props) {
        super(props);
        this.imageUpload = this.imageUpload.bind(this);
    }

    hidePen() {
        this.props.hidePen();
    }
    hidePenn() {
        this.props.hidePenn();
    }
    updateAccountDetails(email, userName) {

        this.props.updateAccountDetails(userName, email);
        this.props.changePage();
    }

    imageUpload(e){
        console.log(this.props)
        var file = e.target.files[0];
        var objectURL = window.URL.createObjectURL(file);
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
                        <input
                                className="picUpload"
                                type="file"
                                onChange={
                                this.imageUpload
                                }
                        /> 
                        <img 
                            src={require('./Oval.png')} 
                            className="img-circle center-block"
                        />
                        <img src={this.props.profilePicture}
                             className="profile img-circle"
                        />
                        <h1 contentEditable="true" 
                            id="username"
                            onFocus={()=>this.props.hidePen()}
                        >
                            {this.props.userName}
                        </h1>  
                        <h3 contentEditable="true" 
                            id="email"
                            onFocus={()=>this.props.hidePenn()}>
                            {this.props.email}
                        </h3>
                        
                        {this.props.penShow &&<h1><i className="fa fa-pencil" id="uPen" aria-hidden="true" /></h1>}
                        {this.props.pennShow &&<h3><i className="fa fa-pencil" id="ePen" aria-hidden="true"/></h3>}
                    </div>
                    <div class="uploadButtonImg">
                         
                    </div>
                    <form>
                        <div class="tester">

                            <br />
                            <RaisedButton
                                onClick={() => this.updateAccountDetails( document.getElementById("username").innerText ,document.getElementById("email").innerText) }
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


const mapStateToProps = ({ accountReducer }) => {
    return {
        userName: accountReducer.userName,
        email: accountReducer.email,
        penShow: accountReducer.penShow ,
        pennShow: accountReducer.pennShow,
        penHide: accountReducer.penHide,
        pennHide: accountReducer.pennHide,
        profilePicture: accountReducer.profilePicture 
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/chatareamessages'),
    updateAccountDetails,
    setProfilePic,
    hidePen,
    hidePenn,
    showPen,
    showPenn
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(settings);
