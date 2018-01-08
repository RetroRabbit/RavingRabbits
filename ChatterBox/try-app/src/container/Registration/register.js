import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const RegisterPage = props => (
    <div class="register">
        <div class="welcome">
            <img src={require('../../img/step-one.png')} class="logo" />
        </div>
        <div class="txtbox">
            <TextField
                floatingLabelText="Your Name"
                type="text"
                fullWidth="true"
                class="txtwhite"
            />
            <TextField floatingLabelText="Email" type="text" fullWidth="true" class="txtwhite" />
            <TextField
                floatingLabelText="Password"
                type="password"
                fullWidth="true"
                class="txtwhite"
            />
        </div>
        <RaisedButton
            class="btnReg"
            label="NEXT STEP"
            labelColor="#FFFFFF"
            onClick={() => props.changePage()}
            //onClick={this.userRegister}
        />
    </div>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: () => push('/login')
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

// export default class registerUser extends Component{

//     constructor(props){
//         super(props)
//         this.state={
//             userName: '',
//             userEmail: '',
//             userPassword: ''
//         }
//     }

//     userRegister = () =>{
//         //alert('ok');

//         const {userName} = this.state;
//         const {userEmail} = this.state;
//         const {userPassword} = this.state;

//         fetch('http://192.168.43.246/android/v1/reg.php', {
//             method: 'post',
//             mode: 'no-cors',
//             header:{
//                 'Accept': 'application/json',
//                 'Content-type': 'application/json'
//             },
//             body:JSON.stringify({
//                 username: userName,
//                 email: userEmail,
//                 password: userPassword,
//             })

//         })
//         .then((response) => response.json())
//             .then((responseJson) => {
//                 alert(responseJson);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }

//     render(){
//         return(
//             <div class="register">
//                 <div class="welcome">
//                 <img src={require('../../img/step-onee.png')} class="logo"/>
//                 </div>
//                 <div class="txtbox">
//                 <TextField
//                 floatingLabelText="Your Name"
//                 type="text"
//                 fullWidth="true"
//                 onChange={userName => this.setState({userName})}
//                 class="txtwhite"
//                 />
//                 <TextField
//                 floatingLabelText="Email"
//                 type="text"
//                 fullWidth="true"
//                 onChange={userEmail => this.setState({userEmail})}
//                 class="txtwhite"
//                 />
//                 <TextField
//                 floatingLabelText="Password"
//                 type="password"
//                 fullWidth="true"
//                 onChange={userPassword => this.setState({userPassword})}
//                 class="txtwhite"
//                 />
//                 </div>
//                 <RaisedButton
//                 class="btnReg"
//                 label="NEXT STEP"
//                 labelColor="#FFFFFF"
//                 onClick={() => props.changePage()}
//                 //onClick={this.userRegister}

//                 />
//             </div>
//         );
//     }
// }
