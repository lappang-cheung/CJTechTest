import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';
import persist from './src/redux/config/store';

import Main from './src/Main'

const persistStore = persist();

const App = () => {
	return ( 
		<Provider store={persistStore.store}>
			<PersistGate loading={null} persistor={persistStore.persistor}>
				<>
					<Main />
				</>
			</PersistGate>
		</Provider>
	);
};

export default App;
