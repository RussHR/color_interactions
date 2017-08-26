import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assign, forOwn, has, pick, times } from 'lodash';
import { ChromePicker } from 'react-color';
import { CHANGE_COLOR, RANDOMIZE_COLORS } from '../../constants/actionTypes';
import { generateRandomColor } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class FalseGradient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numBars: 5
        };
        this.changeNumBars = this.changeNumBars.bind(this);
    }

    changeNumBars({ currentTarget: { value: numBars } }) {
        this.setState({ numBars });
    }

    render() {
        const { color0, color1, color2 } = this.props.colors;
        const { numBars } = this.state;

        const bars = times(numBars, (i) => {
            let style;
            if (i % 2 == 0) {
                style = { width: `${100 / numBars}%`, background: `linear-gradient(rgb(${color0.r}, ${color0.g}, ${color0.b}), rgb(${color1.r}, ${color1.g}, ${color1.b}))`};
            } else {
                style = { width: `${100 / numBars}%`, backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
            }
            return (
                <div key={i} style={style} />
            );
        });

        return (
            <div className="full-screen display-flex">
                <CornerMenu colorLabels={['gradient color 1', 'gradient color 2', 'solid color']}>
                    <label htmlFor="num-bars">number of bars: </label>
                    <input
                        id="num-bars"
                        type="number"
                        min="3"
                        max="500"
                        value={numBars}
                        onChange={this.changeNumBars}
                    />
                    <br />
                </CornerMenu>

                {bars}
            </div>
        );
    }
}

FalseGradient.propTypes = {
    colors: (props, propName, componentName) => {
        if (!has(props[propName], 'color0') || !has(props[propName], 'color1') || !has(props[propName], 'color2')) {
            return new Error(
                `Invalid prop ${propName}: missing color0, color1, or color2 in colors of ${componentName}`
            );
        }

        // make sure r, g, and b are 0-255
        forOwn(props[propName], (color) => {
            forOwn(color, (rgbValue, rgb) => {
                if (rgbValue < 0 || rgbValue > 255) {
                    return new Error(
                        `Invalid prop ${propName} of ${componentName}:
                        rgb for ${color} out of bounds (${rgb}: ${rgbValue})`
                    );
                }
            });
        });
    }
};

FalseGradient = connect(mapStateToProps)(FalseGradient);

export default FalseGradient;