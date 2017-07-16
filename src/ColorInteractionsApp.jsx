import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { AColorHasManyFaces } from './components/plates';

import 'normalize.css';
import './main.scss';

function mapStateToProps(state) {
    return state;
}

class ColorInteractionsApp extends Component {
    render() {
        return (
            <AColorHasManyFaces
                colors={pick(this.props.colors, ['color1', 'color2', 'color3'])}
                menuIsOpen={this.props.menu.isOpen} />
        );
    }
}

ColorInteractionsApp = connect(mapStateToProps)(ColorInteractionsApp);

export default ColorInteractionsApp;