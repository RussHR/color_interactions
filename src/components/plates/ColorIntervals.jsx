import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors, getBetweenColor } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class ColorIntervals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colorModifiers: {}
        };

        this.randomizeIntervals = this.randomizeIntervals.bind(this);
        this.randomizeIntervalsViaKeyboard = this.randomizeIntervalsViaKeyboard.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.randomizeIntervalsViaKeyboard);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.randomizeIntervalsViaKeyboard);
    }

    /**
     * Randomizes the intervals by assigning `this.state.colorModifiers` new values.
     * @returns {void}
     */
    randomizeIntervals() {
        console.log('hi');
    }

    /**
     * Randomizes the intervals by assigning `this.state.colorModifiers` new values via the keyboard.
     * @returns {void}
     */
    randomizeIntervalsViaKeyboard({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.randomizeIntervals();
        }
    }

    render() {
        const { color0, color1 } = this.props.colors;

        return (
            <div className="full-screen">
                <CornerMenu colorLabels={['outer base color', 'inner base color']}>
                    <button onClick={this.randomizeIntervals}>randomize intervals (k)</button>
                    <br/>
                </CornerMenu>

                <div className="display-inline-block half-height half-width position-relative">
                    <div className="position-absolute right-0 bottom-0 half-height half-width" />
                </div>

                <div className="display-inline-block half-height half-width position-relative">
                    <div className="position-absolute bottom-0 left-0 half-height half-width" />
                </div>

                <div className="display-inline-block half-height half-width position-relative">
                    <div className="position-absolute top-0 right-0 half-height half-width" />
                </div>

                <div className="display-inline-block half-height half-width position-relative">
                    <div className="position-absolute top-0 left-0 half-height half-width" />
                </div>
            </div>
        );
    }
}

ColorIntervals.propTypes = {
    colors: validatePropColors(2)
};

ColorIntervals = connect(mapStateToProps)(ColorIntervals);

export default ColorIntervals;