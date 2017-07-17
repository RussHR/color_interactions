import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import Home from './components/Home';
import Router from './components/Router';
import { AColorHasManyFaces } from './components/plates';
import { CHANGE_COLOR } from './constants/actionTypes';

import 'normalize.css';
import './main.scss';

function mapStateToProps(state) {
    return state;
}

class ColorInteractionsApp extends Component {

    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
    }

    /**
     * Calls dispatch to change a color.
     * @param {object} payload - data for colors to be changed including new color in rgb format
     * @returns {void}
     */
    changeColor(colorToChange, { rgb: { r, g, b } }) {
        const payload = {};
        payload[colorToChange] = { r, g, b };

        this.props.dispatch({
            type: CHANGE_COLOR,
            payload
        });
    }

    render() {
        return (
            <Router>
                <Home />
            </Router>
        );
    }
}

ColorInteractionsApp = connect(mapStateToProps)(ColorInteractionsApp);

export default ColorInteractionsApp;

/*
<AColorHasManyFaces
                colors={pick(this.props.colors, ['color0', 'color1', 'color2'])}
                onChangeColor={this.changeColor}
            />
*/