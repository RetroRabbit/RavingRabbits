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
import './step.css'

class StepTwo extends React.Component {

    changeImg = (e) => {
        console.log(e.target);
        console.log(e.target.files[0]);

        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = event => {
                this.setState({ profilephoto: event.target.result });
            };
            reader.readAsDataURL(e.target.files[0]);

        }
        this.setState({ hasimg: true });
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
                                    {/* <div className="plus-horizontal" />
                                    <div className="plus-vertical" /> */}
                                    <h1 class="addplus"><b>+</b></h1>
                                </div>
                                <input
                                    type="file"
                                    onChange={e => {
                                        this.changeImg(e);
                                    }}
                                    style={inputimg}
                                />
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
export default StepTwo


// const step_two = props => (

//     <div class="register">
//         <div class="welcome">
//             <img src={require('../../img/step-two.png')} class="logo"/>
//         </div>
//         <div class="circleDiv">
//             <button
//             type="file"
//             class="btnCircle"
//             ><h2>+</h2></button>
//         </div>
//         <div>
//             <RaisedButton
//             class="btnStepTwo" 
//             label="NEXT STEP" 
//             labelColor="#FFFFFF"
//             onClick={() => props.changePage()}
//             />
//         </div>
//         <div class="skip">
//             <Link class="skip" to="/last-step">Skip for now</Link>
//         </div>
//     </div>
// )

// const mapStateToProps = state => ({
// })
  
// const mapDispatchToProps = dispatch => bindActionCreators({
//   changePage: () => push('/last-step')
// }, dispatch)
  
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(step_two)