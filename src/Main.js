import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
import {connect} from 'react-redux';

import Routes from './configs/Routes';

class Main extends Component{
    render(){

        const {createUser} = this.props;

        return(
            <>
                <StatusBar
                    barStyle="light-content"
                />
                <Routes isLoggedin={this.props.createUser.isLoggedin} />
            </>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#455a64',
		flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
	}
});

const mapStateToProps = state => ({
    createUser: state.authReducer.createUser
})

export default connect(mapStateToProps,null)(Main);