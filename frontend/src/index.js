import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import "@blueprintjs/core/lib/css/blueprint.css";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('page-container'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);