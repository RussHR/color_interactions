if (module.hot) {
    module.hot.accept();
}

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ColorInteractionsApp from './ColorInteractionsApp';

const store = createStore(placeholderReducer);

import 'normalize.css';
import './main.scss';

render(
    <Provider store={store}>
        <ColorInteractionsApp />
    </Provider>,
    document.getElementById('app')
);

function placeholderReducer(state = [], action) {
    switch (action.type) {
    default:
        return state
    }
}