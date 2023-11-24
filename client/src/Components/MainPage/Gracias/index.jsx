import React from 'react';
import ReactDOM from 'react-dom/client';
import Gracias from './Gracias.jsx';

import { Provider } from 'react-redux';

import store from '../../../redux/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<React.StrictMode>
			<Gracias />
    </React.StrictMode>
	</Provider>
);
