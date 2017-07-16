import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
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
            <AColorHasManyFaces
                colors={pick(this.props.colors, ['color0', 'color1', 'color2'])}
                onChangeColor={this.changeColor}
            />
        );
    }
}

ColorInteractionsApp = connect(mapStateToProps)(ColorInteractionsApp);

export default ColorInteractionsApp;