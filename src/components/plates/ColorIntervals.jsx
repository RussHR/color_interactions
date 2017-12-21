import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors, getRgbOffset } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class ColorIntervals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colorModifiers: {
                topRight: {
                    r: Math.round((Math.random() * 100) - 50),
                    g: Math.round((Math.random() * 100) - 50),
                    b: Math.round((Math.random() * 100) - 50)
                },
                bottomRight: {
                    r: Math.round((Math.random() * 100) - 50),
                    g: Math.round((Math.random() * 100) - 50),
                    b: Math.round((Math.random() * 100) - 50)
                },
                bottomLeft: {
                    r: Math.round((Math.random() * 100) - 50),
                    g: Math.round((Math.random() * 100) - 50),
                    b: Math.round((Math.random() * 100) - 50)
                }
            }
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
        this.setState({
            colorModifiers: {
                topRight: {
                    r: Math.round((Math.random() * 100) - 50),
                    g: Math.round((Math.random() * 100) - 50),
                    b: Math.round((Math.random() * 100) - 50)
                },
                bottomRight: {
                    r: Math.round((Math.random() * 100) - 50),
                    g: Math.round((Math.random() * 100) - 50),
                    b: Math.round((Math.random() * 100) - 50)
                },
                bottomLeft: {
                    r: Math.round((Math.random() * 100) - 50),
                    g: Math.round((Math.random() * 100) - 50),
                    b: Math.round((Math.random() * 100) - 50)
                }
            }
        });
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
        const { colorModifiers: { topRight, bottomRight, bottomLeft } } = this.state;

        const outerBaseStyle = {
            backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})`
        };
        const innerBaseStyle = {
            backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})`
        };

        // colors for top right
        const actualTopRightOffsetR = getRgbOffset(topRight.r, color0.r, color1.r);
        const actualTopRightOffsetG = getRgbOffset(topRight.g, color0.g, color1.g);
        const actualTopRightOffsetB = getRgbOffset(topRight.b, color0.b, color1.b);
        const outerTopRightStyle = {
            backgroundColor:`rgb(${color0.r + actualTopRightOffsetR}, ${color0.g + actualTopRightOffsetG},
                ${color0.b + actualTopRightOffsetB})`
        };
        const innerTopRightStyle = {
            backgroundColor: `rgb(${color1.r + actualTopRightOffsetR}, ${color1.g + actualTopRightOffsetG},
                ${color1.b + actualTopRightOffsetB})`
        };

        // colors for bottom right
        const actualBottomRightOffsetR = getRgbOffset(bottomRight.r, color0.r, color1.r);
        const actualBottomRightOffsetG = getRgbOffset(bottomRight.g, color0.g, color1.g);
        const actualBottomRightOffsetB = getRgbOffset(bottomRight.b, color0.b, color1.b);
        const outerBottomRightStyle = {
            backgroundColor: `rgb(${color0.r + actualBottomRightOffsetR}, ${color0.g + actualBottomRightOffsetG},
                ${color0.b + actualBottomRightOffsetB})`
        };
        const innerBottomRightStyle = {
            backgroundColor: `rgb(${color1.r + actualBottomRightOffsetR}, ${color1.g + actualBottomRightOffsetG},
                ${color1.b + actualBottomRightOffsetB})`
        };

        // colors for bottom left
        const actualBottomLeftOffsetR = getRgbOffset(bottomLeft.r, color0.r, color1.r);
        const actualBottomLeftOffsetG = getRgbOffset(bottomLeft.g, color0.g, color1.g);
        const actualBottomLeftOffsetB = getRgbOffset(bottomLeft.b, color0.b, color1.b);
        const outerBottomLeftStyle = {
            backgroundColor: `rgb(${color0.r + actualBottomLeftOffsetR}, ${color0.g + actualBottomLeftOffsetG},
                ${color0.b + actualBottomLeftOffsetB})`
        };
        const innerBottomLeftStyle = {
            backgroundColor: `rgb(${color1.r + actualBottomLeftOffsetR}, ${color1.g + actualBottomLeftOffsetG},
                ${color1.b + actualBottomLeftOffsetB})`
        };

        return (
            <div className="full-screen">
                <CornerMenu colorLabels={['top left outer color', 'top left inner color']}>
                    <button onClick={this.randomizeIntervals}>randomize intervals (k)</button>
                    <br/>
                </CornerMenu>

                <div className="display-inline-block half-height half-width position-relative" style={outerBaseStyle}>
                    <div
                        className="position-absolute right-0 bottom-0 half-height half-width"
                        style={innerBaseStyle}
                    />
                </div>

                <div
                    className="display-inline-block half-height half-width position-relative"
                    style={outerTopRightStyle}
                >
                    <div
                        className="position-absolute bottom-0 left-0 half-height half-width"
                        style={innerTopRightStyle}
                    />
                </div>

                <div
                    className="display-inline-block half-height half-width position-relative"
                    style={outerBottomLeftStyle}
                >
                    <div
                        className="position-absolute top-0 right-0 half-height half-width"
                        style={innerBottomLeftStyle}
                    />
                </div>

                <div
                    className="display-inline-block half-height half-width position-relative"
                    style={outerBottomRightStyle}
                >
                    <div
                        className="position-absolute top-0 left-0 half-height half-width"
                        style={innerBottomRightStyle}
                    />
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