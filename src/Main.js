import React, {Component} from 'react';
import {
  StatusBar
} from 'react-native';
import {connect} from 'react-redux';

import Routes from './configs/Routes';

class Main extends Component{
    render(){

        const {authData:{isLoggedIn}} = this.props;

        return(
            <>
                <StatusBar
                    barStyle="light-content"
                />
                <Routes isLoggedIn={isLoggedIn} />
            </>
        )
    }
}

const mapStateToProps = state => ({
    authData: state.authReducer.authData
})

export default connect(mapStateToProps,null)(Main);