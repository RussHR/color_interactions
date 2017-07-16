import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ColorInteractionsApp from './ColorInteractionsApp';
import rootReducer from './reducers';

const store = createStore(rootReducer);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
        const nextRootReducer = require('./reducers');
        store.replaceReducer(nextRootReducer);
    });
}

render(
    <Provider store={store}>
        <ColorInteractionsApp />
    </Provider>,
    document.getElementById('app')
);

