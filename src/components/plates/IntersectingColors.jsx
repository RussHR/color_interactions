import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import classNames from 'classnames';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './intersecting_colors.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class IntersectingColors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rightPlateShifted: false
        };

        this.toggleRightPlateShifted = this.toggleRightPlateShifted.bind(this);
        this.toggleRightPlateShiftedViaKeyboard = this.toggleRightPlateShiftedViaKeyboard.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.toggleRightPlateShiftedViaKeyboard);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.toggleRightPlateShiftedViaKeyboard);
    }

    /**
     * Toggles the state of whether the right plate is shifted to the left.
     * @returns {void}
     */
    toggleRightPlateShifted() {
        this.setState({ rightPlateShifted: !this.state.rightPlateShifted });
    }

    /**
     * Toggles the state of whether the right plate is shifted to the left via the keyboard.
     * @returns {void}
     */
    toggleRightPlateShiftedViaKeyboard({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.toggleRightPlateShifted();
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

        const rightPlateClassNames = classNames(
            'IntersectingColors__smallPlate--right',
            'full-height',
            'full-width',
            'position-absolute',
            { 'IntersectingColors__smallPlate--rightShifted': this.state.rightPlateShifted }
        );

        return (
            <div className="full-screen overflow-hidden">
                <CornerMenu colorLabels={['left background color', 'right background color']}>
                    <button onClick={this.toggleRightPlateShifted}>shift right plate (k)</button>
                    <br/>
                </CornerMenu>
                <div>
                    <div
                        className="IntersectingColors__smallPlate full-height position-absolute top-0 left-0"
                        style={leftPlateColor}
                    />
                    <div
                        className={`IntersectingColors__smallPlate IntersectingColors__smallPlate--inner full-height
                            position-absolute top-0`}
                        style={innerPlateColor}
                    />
                    <div className={rightPlateClassNames} style={rightPlateColor} />
                </div>
            </div>
        );
    }
}

IntersectingColors.propTypes = {
    colors: validatePropColors(2)
};

IntersectingColors = connect(mapStateToProps)(IntersectingColors);

export default IntersectingColors;