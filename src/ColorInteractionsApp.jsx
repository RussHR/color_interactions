import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AColorHasManyFaces } from './components/plates';

import 'normalize.css';
import './main.scss';

function mapStateToProps(state) {
    return state.get('colors').toJS();
}

class ColorInteractionsApp extends Component {
    render() {
        return <AColorHasManyFaces colors={this.props.colors.slice(0, 3)} />;
    }
}

ColorInteractionsApp = connect(mapStateToProps)(ColorInteractionsApp);

export default ColorInteractionsApp;