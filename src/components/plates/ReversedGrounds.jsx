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
            innerShapesTouching: false,
            setInnerColor: false
        };

        this.toggleInnerShapesTouching = this.toggleInnerShapesTouching.bind(this);
        this.toggleInnerShapesTouchingViaKeyboard = this.toggleInnerShapesTouchingViaKeyboard.bind(this);
        this.toggleSetInnerColor = this.toggleSetInnerColor.bind(this);
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

    /**
     * Toggles the state of whether the middle color is set to color2.
     * @returns {void}
     */
    toggleSetInnerColor() {
        this.setState({ setInnerColor: !this.state.setInnerColor });
    }

    render() {
        const { colors } = this.props;
        const { color0, color1 } = colors;
        const leftPlateColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const rightPlateColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };


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

        const colorLabels = ['left background color', 'right background color'];
        let innerShapeStyle;

        if (this.state.setInnerColor) {
            colorLabels.push('inner color');

            const { color2 } = this.props.colors;
            innerShapeStyle = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
        } else {
            const averageR = Math.floor((color0.r + color1.r) / 2);
            const averageG = Math.floor((color0.g + color1.g) / 2);
            const averageB = Math.floor((color0.b + color1.b) / 2);
            innerShapeStyle = { backgroundColor: `rgb(${averageR}, ${averageG}, ${averageB})` };
        }

        return (
            <div className="full-screen display-flex overflow-hidden">
                <CornerMenu colorLabels={colorLabels}>
                    <button onClick={this.toggleInnerShapesTouching}>touch inner blocks (k)</button>
                    <br/>
                    <label htmlFor="custom-inner-color">custom inner color: </label>
                    <input
                        id="custom-inner-color"
                        type="checkbox"
                        onChange={this.toggleSetInnerColor}
                        checked={this.state.setInnerColor}
                    />
                    <br />
                </CornerMenu>
                <div
                    className="justify-content-center align-items-center display-flex half-width full-height"
                    style={leftPlateColor}
                >
                    <div
                        className={leftInnerShapeClass}
                        style={innerShapeStyle}
                    />
                </div>
                <div
                    className="justify-content-center align-items-center display-flex half-width full-height"
                    style={rightPlateColor}
                >
                    <div
                        className={rightInnerShapeClass}
                        style={innerShapeStyle}
                    />
                </div>
            </div>
        );
    }
}

ReversedGrounds.propTypes = {
    colors: validatePropColors(3)
};

ReversedGrounds = connect(mapStateToProps)(ReversedGrounds);

export default ReversedGrounds;