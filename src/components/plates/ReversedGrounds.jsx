import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import classNames from 'classnames';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './reversed_grounds.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class ReversedGrounds extends Component {
    constructor(props) {
        super(props);

        this.state = {
            innerShapesTouching: false
        };

        this.toggleInnerShapesTouching = this.toggleInnerShapesTouching.bind(this);
        this.toggleInnerShapesTouchingViaKeyboard = this.toggleInnerShapesTouchingViaKeyboard.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.toggleInnerShapesTouchingViaKeyboard);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.toggleInnerShapesTouchingViaKeyboard);
    }

    /**
     * Toggles the state of whether the inner shapes are touching.
     * @returns {void}
     */
    toggleInnerShapesTouching() {
        this.setState({ innerShapesTouching: !this.state.innerShapesTouching });
    }

    /**
     * Toggles the state of whether the inner shapes are touching via keyboard.
     * @returns {void}
     */
    toggleInnerShapesTouchingViaKeyboard({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.toggleInnerShapesTouching();
        }
    }

    render() {
        const { colors } = this.props;
        const { color0, color1 } = colors;
        const leftPlateColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const rightPlateColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        const averageR = Math.floor((color0.r + color1.r) / 2);
        const averageG = Math.floor((color0.g + color1.g) / 2);
        const averageB = Math.floor((color0.b + color1.b) / 2);
        const innerPlateColor = { backgroundColor: `rgb(${averageR}, ${averageG}, ${averageB})` };

        const leftInnerShapeClass = classNames(
            'ReversedGrounds__innerBlock',
            'ReversedGrounds__innerBlock--left',
            'standard-transition',
            { 'ReversedGrounds__innerBlock--touching': this.state.innerShapesTouching }
        );

        const rightInnerShapeClass = classNames(
            'ReversedGrounds__innerBlock',
            'ReversedGrounds__innerBlock--right',
            'standard-transition',
            { 'ReversedGrounds__innerBlock--touching': this.state.innerShapesTouching }
        );

        return (
            <div className="full-screen display-flex">
                <CornerMenu colorLabels={['left background color', 'right background color']}>
                    <button onClick={this.toggleInnerShapesTouching}>touch inner blocks (k)</button>
                    <br/>
                </CornerMenu>
                <div
                    className="justify-content-center align-items-center display-flex half-width full-height"
                    style={leftPlateColor}
                >
                    <div
                        className={leftInnerShapeClass}
                        style={innerPlateColor}
                    />
                </div>
                <div
                    className="justify-content-center align-items-center display-flex half-width full-height"
                    style={rightPlateColor}
                >
                    <div
                        className={rightInnerShapeClass}
                        style={innerPlateColor}
                    />
                </div>
            </div>
        );
    }
};

ReversedGrounds.propTypes = {
    colors: validatePropColors(2)
};

ReversedGrounds = connect(mapStateToProps)(ReversedGrounds);

export default ReversedGrounds;