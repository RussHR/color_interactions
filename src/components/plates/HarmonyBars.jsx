import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
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
            leftValues: generateNewLeftValues(),
            alternateLayout: false
        };

        this.randomizeBarPositions = this.randomizeBarPositions.bind(this);
        this.alternateLayout = this.alternateLayout.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);

        this.modalContents = (
            <p>
                There are hardly any absolute rules for making a harmonious or pleasant image;
                these are subjective values. That said, almost any combination of colors can
                usually be arranged harmoniously by adjusting two factors: their frequency and
                their amount. In these four boxes, the same four colors are used in different
                amounts and frequencies, but notice how some compositions are more pleasant than others.
            </p>
        );
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.handleKeydown);
    }

    /**
     * Randomizes positions of the bars.
     * @returns {void}
     */
    randomizeBarPositions() {
        this.setState({ leftValues: generateNewLeftValues() });
    }

    /**
     * Handles keydown events
     * @returns {void}
     */
    handleKeydown({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.randomizeBarPositions();
        } else if (keyCode === 76) {
            // if key is 'l'
            this.alternateLayout();
        }
    }

    /**
     * Alternates the layout.
     * @returns {void}
     */
    alternateLayout() {
        this.setState({ alternateLayout: !this.state.alternateLayout });
    }

    render() {
        const { color0, color1, color2, color3 } = this.props.colors;
        const { block0, block1, block2, block3 } = this.state.leftValues;
        const color0Style = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const color1Style = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        const color2Style = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
        const color3Style = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };

        const harmonyBarsClassName = classNames('full-screen', 'display-grid',{
            'HarmonyBars': !this.state.alternateLayout
        });

        return (
            <div className={harmonyBarsClassName}>
                <CornerMenu
                    colorLabels={['color 1', 'color 2', 'color 3', 'color 4']}
                    modalContents={this.modalContents}
                >
                    <button onClick={this.randomizeBarPositions}>randomize bar positions (k)</button>
                    <br />
                    <button onClick={this.alternateLayout}>alternate layout (l)</button>
                    <br />
                </CornerMenu>

                {/* top left */}
                <div className="HarmonyBars__barsGroup position-relative" style={color0Style}>
                    <div
                        className="position-absolute full-height width-4"
                        style={merge({}, block0.width4_0, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block0.width1_0, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-2"
                        style={merge({}, block0.width2_0, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-3"
                        style={merge({}, block0.width3_0, color2Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block0.width1_1, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block0.width1_2, color3Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block0.width1_3, color3Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block0.width1_4, color3Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block0.width1_5, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block0.width1_6, color3Style)}
                    />
                    <div
                        className="position-absolute full-height width-2"
                        style={merge({}, block0.width2_1, color2Style)}
                    />
                    <div
                        className="position-absolute full-height width-2"
                        style={merge({}, block0.width2_2, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block0.width1_6, color2Style)}
                    />
                </div>

                {/* top right */}
                <div className="HarmonyBars__barsGroup position-relative" style={color1Style}>
                    <div
                        className="position-absolute full-height width-5"
                        style={merge({}, block1.width5_0, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block1.width1_0, color2Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block1.width1_1, color2Style)}
                    />
                    <div
                        className="position-absolute full-height width-4"
                        style={merge({}, block1.width4_0, color3Style)}
                    />
                </div>

                {/* bottom left */}
                <div className="HarmonyBars__barsGroup position-relative" style={color2Style}>
                    <div
                        className="position-absolute full-height width-2"
                        style={merge({}, block2.width2_0, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block2.width1_0, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block2.width1_1, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-3"
                        style={merge({}, block2.width3_0, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block2.width1_2, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-3"
                        style={merge({}, block2.width3_1, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block2.width1_3, color3Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block2.width1_4, color3Style)}
                    />
                    <div
                        className="position-absolute full-height width-2"
                        style={merge({}, block2.width2_1, color3Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block2.width1_5, color3Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block2.width1_6, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-2"
                        style={merge({}, block2.width2_2, color3Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block2.width1_7, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-3"
                        style={merge({}, block2.width3_2, color3Style)}
                    />
                    <div
                        className="position-absolute full-height width-4"
                        style={merge({}, block2.width4_0, color1Style)}
                    />
                </div>

                {/* bottom right */}
                <div className="HarmonyBars__barsGroup position-relative" style={color3Style}>
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block3.width1_0, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block3.width1_1, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-2"
                        style={merge({}, block3.width2_0, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block3.width1_2, color2Style)}
                    />
                    <div
                        className="position-absolute full-height width-3"
                        style={merge({}, block3.width3_0, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-2"
                        style={merge({}, block3.width2_1, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-3"
                        style={merge({}, block3.width3_1, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-2"
                        style={merge({}, block3.width2_2, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block3.width1_3, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block3.width1_4, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block3.width1_5, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-2"
                        style={merge({}, block3.width2_3, color0Style)}
                    />
                    <div
                        className="position-absolute full-height width-1"
                        style={merge({}, block3.width1_6, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-2"
                        style={merge({}, block3.width2_4, color1Style)}
                    />
                    <div
                        className="position-absolute full-height width-2"
                        style={merge({}, block3.width2_5, color0Style)}
                    />
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
        },
        block2: {
            width2_0: { left: `${Math.random() * 98}%` },
            width1_0: { left: `${Math.random() * 99}%` },
            width1_1: { left: `${Math.random() * 99}%` },
            width3_0: { left: `${Math.random() * 97}%` },
            width1_2: { left: `${Math.random() * 99}%` },
            width3_1: { left: `${Math.random() * 97}%` },
            width1_3: { left: `${Math.random() * 99}%` },
            width1_4: { left: `${Math.random() * 99}%` },
            width2_1: { left: `${Math.random() * 98}%` },
            width1_5: { left: `${Math.random() * 99}%` },
            width1_6: { left: `${Math.random() * 99}%` },
            width2_2: { left: `${Math.random() * 98}%` },
            width1_7: { left: `${Math.random() * 99}%` },
            width3_2: { left: `${Math.random() * 97}%` },
            width4_0: { left: `${Math.random() * 96}%` }
        },
        block3: {
            width1_0: { left: `${Math.random() * 99}%` },
            width1_1: { left: `${Math.random() * 99}%` },
            width2_0: { left: `${Math.random() * 98}%` },
            width1_2: { left: `${Math.random() * 99}%` },
            width3_0: { left: `${Math.random() * 97}%` },
            width2_1: { left: `${Math.random() * 98}%` },
            width3_1: { left: `${Math.random() * 97}%` },
            width2_2: { left: `${Math.random() * 98}%` },
            width1_3: { left: `${Math.random() * 99}%` },
            width1_4: { left: `${Math.random() * 99}%` },
            width1_5: { left: `${Math.random() * 99}%` },
            width2_3: { left: `${Math.random() * 98}%` },
            width1_6: { left: `${Math.random() * 99}%` },
            width2_4: { left: `${Math.random() * 98}%` },
            width2_5: { left: `${Math.random() * 98}%` }
        }
    };
}