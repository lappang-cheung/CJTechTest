import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';

import Routes from './configs/Routes';

const Main = () => {
	return (
        <>
            <StatusBar
                barStyle="dark-content"
            />
            <Routes />
        </>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#455a64',
		flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
	}
});

export default Main;