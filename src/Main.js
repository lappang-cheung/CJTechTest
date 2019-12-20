import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';

import {Provider} from 'react-redux';
import store from './redux/config/store';

import Routes from './configs/Routes';

const Main = () => {
	return (
		<Provider store={store}>
		<>
			<StatusBar
				barStyle="dark-content"
			/>
			<Routes />
		</>
		</Provider>
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