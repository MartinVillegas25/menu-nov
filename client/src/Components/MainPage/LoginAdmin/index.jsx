import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginAdmin from './LoginAdmin.jsx';

import { Provider } from 'react-redux';

import store from '../../../redux/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
		<Provider store={store}>
			<React.StrictMode>
				< LoginAdmin />
			</React.StrictMode>
		</Provider>
);
