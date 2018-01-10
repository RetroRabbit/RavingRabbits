
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
    <div className="background">
        <header className="Rectangle-3">
            <Header />
        </header>

        <div class="row">
            <img src={require('./Oval.png')} class="img-circle center-block"/>
            <img src={require('./ext.jpg')} class="profile img-circle"/>

            <a class="mylink" href="#"><h1>Addie Hogan <i className="fa fa-pencil" aria-hidden="true" /></h1></a>
            <a class="mylink" href="#"><h3>addiehogan@gmail&#46;com{' '}<i className="fa fa-pencil" id="email" aria-hidden="true" /></h3></a>
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
