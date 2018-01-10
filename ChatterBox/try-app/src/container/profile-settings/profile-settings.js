
import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../Header';


import './profile-settings.css';
const settings = props => (
    <div className="whiteBackground">
        <header className="Rectangle-3">
            <Header />
        </header>

        <div class="row">
            <div class="topSection">
                <img src={require('./Oval.png')} class="img-circle center-block"/>
                <img src={require('./mypic.JPG')} class="profile img-circle"/>
                <div id="example-one" contenteditable="true" class="mylink">
                    
                        <h1>Arsalan Ahmed   
                        </h1>
                        
                        <h3>ash@gmail&#46;com{' '}
                        </h3>
                </div>
                <h1><i className="fa fa-pencil" aria-hidden="true" /></h1>
                <h3><i className="fa fa-pencil" id="email" aria-hidden="true" /></h3>
            </div>
            <form>
                <div>
                    <br />
                    <RaisedButton
                        onClick={() => props.changePage()}
                        label="Done"
                        className="button"
                        id="done"
                        labelColor="color:#fff;"
                    />
                </div>
            </form>
          
        </div>
    </div>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: () => push('/chatareamessages')
            
        },
        dispatch
    );

   
export default connect(mapStateToProps, mapDispatchToProps)(settings);
