import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './harmony_wiggly_bars.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

let HarmonyWigglyBars = ({ colors }) => {
    const { color0, color1, color2, color3 } = colors;
    const color0Style = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const color1Style = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
    const color2Style = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
    const color3Style = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };

    return (
        <div className="full-screen">
            <CornerMenu colorLabels={['color 1', 'color 2', 'color 3', 'color 4']} />

            <div className="HarmonyWigglyBars__bgBar full-height display-inline-block" style={color0Style}>
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
            </div>

            <div className="HarmonyWigglyBars__bgBar full-height display-inline-block" style={color3Style}>
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
            </div>

            <div className="HarmonyWigglyBars__bgBar full-height display-inline-block" style={color1Style}>
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color2Style} />
            </div>

            <div className="HarmonyWigglyBars__bgBar full-height display-inline-block" style={color2Style}>
                <div className="HarmonyWigglyBars__figureBar full-width" style={color3Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color1Style} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={color0Style} />
            </div>
        </div>
    );
};

HarmonyWigglyBars.propTypes = {
    colors: validatePropColors(4)
};

HarmonyWigglyBars = connect(mapStateToProps)(HarmonyWigglyBars);

export default HarmonyWigglyBars;