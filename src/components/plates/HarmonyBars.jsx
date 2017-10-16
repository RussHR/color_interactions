import React, { Component } from 'react';
import { connect } from 'react-redux';
import { merge, pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './harmony_bars.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class HarmonyBars extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leftValues: generateNewLeftValues()
        };

        this.randomizeBarPositions = this.randomizeBarPositions.bind(this);
        this.randomizeBarPositionsViaKeyboard = this.randomizeBarPositionsViaKeyboard.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.randomizeBarPositionsViaKeyboard);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.randomizeBarPositionsViaKeyboard);
    }

    /**
     * Randomizes positions of the bars.
     * @returns {void}
     */
    randomizeBarPositions() {
        this.setState({ leftValues: generateNewLeftValues() });
    }

    /**
     * Randomizes positions of the bars via keyboard.
     * @returns {void}
     */
    randomizeBarPositionsViaKeyboard({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.randomizeBarPositions();
        }
    }

    render() {
        const { color0, color1, color2, color3 } = this.props.colors;
        const { block0, block1 } = this.state.leftValues;
        const color0Style = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const color1Style = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        const color2Style = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
        const color3Style = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };


        return (
            <div className="full-screen HarmonyBars display-grid">
                <CornerMenu colorLabels={['color 1', 'color 2', 'color 3', 'color 4']}>
                    <button onClick={this.randomizeBarPositions}>randomize bar positions (k)</button>
                    <br />
                </CornerMenu>

                {/* top left */}
                <div className="HarmonyBars__barsGroup position-relative" style={color0Style}>
                    <div className="position-absolute full-height width-4" style={merge({}, block0.width4_0, color1Style)} />
                    <div className="position-absolute full-height width-1" style={merge({}, block0.width1_0, color1Style)} />
                    <div className="position-absolute full-height width-2" style={merge({}, block0.width2_0, color1Style)} />
                    <div className="position-absolute full-height width-3" style={merge({}, block0.width3_0, color2Style)} />
                    <div className="position-absolute full-height width-1" style={merge({}, block0.width1_1, color1Style)} />
                    <div className="position-absolute full-height width-1" style={merge({}, block0.width1_2, color3Style)} />
                    <div className="position-absolute full-height width-1" style={merge({}, block0.width1_3, color3Style)} />
                    <div className="position-absolute full-height width-1" style={merge({}, block0.width1_4, color3Style)} />
                    <div className="position-absolute full-height width-1" style={merge({}, block0.width1_5, color1Style)} />
                    <div className="position-absolute full-height width-1" style={merge({}, block0.width1_6, color3Style)} />
                    <div className="position-absolute full-height width-2" style={merge({}, block0.width2_1, color2Style)} />
                    <div className="position-absolute full-height width-2" style={merge({}, block0.width2_2, color1Style)} />
                    <div className="position-absolute full-height width-1" style={merge({}, block0.width1_6, color2Style)} />
                </div>
                {/* top right */}
                <div className="HarmonyBars__barsGroup position-relative" style={color1Style}>
                    <div className="position-absolute full-height width-5" style={merge({}, block1.width5_0, color0Style)} />
                    <div className="position-absolute full-height width-1" style={merge({}, block1.width1_0, color2Style)} />
                    <div className="position-absolute full-height width-1" style={merge({}, block1.width1_1, color2Style)} />
                    <div className="position-absolute full-height width-4" style={merge({}, block1.width4_0, color3Style)} />
                </div>
                {/* bottom left */}
                <div className="HarmonyBars__barsGroup" style={color2Style}>
                </div>
                {/* bottom right */}
                <div className="HarmonyBars__barsGroup" style={color3Style}>
                </div>
            </div>
        );
    }
}

HarmonyBars.propTypes = {
    colors: validatePropColors(4)
};

HarmonyBars = connect(mapStateToProps)(HarmonyBars);

export default HarmonyBars;

function generateNewLeftValues() {
    return {
        block0: {
            width4_0: { left: `${Math.random() * 96}%` },
            width1_0: { left: `${Math.random() * 99}%` },
            width2_0: { left: `${Math.random() * 98}%` },
            width3_0: { left: `${Math.random() * 97}%` },
            width1_1: { left: `${Math.random() * 99}%` },
            width1_2: { left: `${Math.random() * 99}%` },
            width1_3: { left: `${Math.random() * 99}%` },
            width1_4: { left: `${Math.random() * 99}%` },
            width1_5: { left: `${Math.random() * 99}%` },
            width1_6: { left: `${Math.random() * 99}%` },
            width2_1: { left: `${Math.random() * 98}%` },
            width2_2: { left: `${Math.random() * 98}%` },
            width1_7: { left: `${Math.random() * 99}%` }
        },
        block1: {
            width5_0: { left: `${Math.random() * 95}%` },
            width1_0: { left: `${Math.random() * 99}%` },
            width1_1: { left: `${Math.random() * 99}%` },
            width4_0: { left: `${Math.random() * 96}%` }
        }
    };
}