import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AColorHasManyFaces } from './modules/plates';

import 'normalize.css';
import './main.scss';

function mapStateToProps(state) {
    return state;
}

class ColorInteractionsApp extends Component {
    render() {
        console.log(this)
        return <AColorHasManyFaces />;
    }
}

ColorInteractionsApp = connect(mapStateToProps)(ColorInteractionsApp);

export default ColorInteractionsApp;