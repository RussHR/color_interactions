import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './harmony_circles.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

let HarmonyCircles = ({ colors }) => {
    const { color0, color1, color2, color3, color4, color5 } = colors;
    const mainBgStyle = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const blockBgStyle = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
    const color2Style = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
    const color3Style = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };
    const color4Style = { backgroundColor: `rgb(${color4.r}, ${color4.g}, ${color4.b})` };
    const color5Style = { backgroundColor: `rgb(${color5.r}, ${color5.g}, ${color5.b})` };

    const colorLabels = [
        'backgroundColor',
        'weird box color',
        'circle color 1',
        'circle color 2',
        'circle color 3',
        'circle color 4'
    ];

    return (
        <div
            className="full-screen display-flex flex-direction-column align-items-center justify-content-space-evenly"
            style={mainBgStyle}
        >
            <CornerMenu colorLabels={colorLabels} />
            <div className="HarmonyCircles__block" style={blockBgStyle}>
            </div>
            <div className="HarmonyCircles__block" style={blockBgStyle}>
            </div>
        </div>
    );
};

HarmonyCircles.propTypes = {
    colors: validatePropColors(6)
};

HarmonyCircles = connect(mapStateToProps)(HarmonyCircles);

export default HarmonyCircles;