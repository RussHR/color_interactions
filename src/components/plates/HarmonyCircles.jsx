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
    const circleColor0Style = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
    const circleColor1Style = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };
    const circleColor2Style = { backgroundColor: `rgb(${color4.r}, ${color4.g}, ${color4.b})` };
    const circleColor3Style = { backgroundColor: `rgb(${color5.r}, ${color5.g}, ${color5.b})` };

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
            <div
                className="HarmonyCircles__block display-flex align-items-center justify-content-space-evenly"
                style={blockBgStyle}
            >
                <HarmonyCircle
                    circleColor0={circleColor0Style}
                    circleColor1={circleColor1Style}
                    circleColor2={circleColor2Style}
                    circleColor3={circleColor3Style}
                />
                <HarmonyCircle
                    circleColor0={circleColor2Style}
                    circleColor1={circleColor3Style}
                    circleColor2={circleColor0Style}
                    circleColor3={circleColor1Style}
                />
            </div>
            <div
                className="HarmonyCircles__block display-flex align-items-center justify-content-space-evenly"
                style={blockBgStyle}
            >
                <HarmonyCircle
                    circleColor0={circleColor3Style}
                    circleColor1={circleColor0Style}
                    circleColor2={circleColor1Style}
                    circleColor3={circleColor2Style}
                />
                <HarmonyCircle
                    circleColor0={circleColor1Style}
                    circleColor1={circleColor2Style}
                    circleColor2={circleColor3Style}
                    circleColor3={circleColor0Style}
                />
            </div>
        </div>
    );
};

HarmonyCircles.propTypes = {
    colors: validatePropColors(6)
};

HarmonyCircles = connect(mapStateToProps)(HarmonyCircles);

export default HarmonyCircles;

const HarmonyCircle = ({ circleColor0, circleColor1, circleColor2, circleColor3 }) => {
    return (
        <div className="HarmonyCircles__mainCircle circle position-relative" style={circleColor0}>
            <div className="HarmonyCircles__secondaryCircle circle absolute-center" style={circleColor1}>
                <div className="half-width half-height circle absolute-center" style={circleColor2}>
                    <div className="HarmonyCircles__fourthCircle circle absolute-center" style={circleColor1}>
                        <div className="HarmonyCircles__innermostCircle circle absolute-center" style={circleColor3}/>
                    </div>
                </div>
            </div>
        </div>
    );
};