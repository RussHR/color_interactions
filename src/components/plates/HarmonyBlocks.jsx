import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './harmony_blocks.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

let HarmonyBlocks = ({ colors }) => {
    const { color0, color1, color2, color3 } = colors;
    const color0Style = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const color1Style = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
    const color2Style = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
    const color3Style = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };


    return (
        <div className="full-screen HarmonyBlocks display-grid">
            <CornerMenu colorLabels={['color 1', 'color 2', 'color 3', 'color 4']} />

            <HarmonyBlock bg0={color0Style} bg1={color3Style} bg2={color2Style} bg3={color1Style} />
            <HarmonyBlock bg0={color0Style} bg1={color3Style} bg2={color1Style} bg3={color2Style} />
            <HarmonyBlock bg0={color0Style} bg1={color1Style} bg2={color2Style} bg3={color3Style} />
            <HarmonyBlock bg0={color0Style} bg1={color1Style} bg2={color3Style} bg3={color2Style} />
            <HarmonyBlock bg0={color0Style} bg1={color2Style} bg2={color3Style} bg3={color1Style} />
            <HarmonyBlock bg0={color0Style} bg1={color2Style} bg2={color1Style} bg3={color3Style} />

            <HarmonyBlock bg0={color1Style} bg1={color3Style} bg2={color0Style} bg3={color2Style} />
            <HarmonyBlock bg0={color1Style} bg1={color3Style} bg2={color2Style} bg3={color0Style} />
            <HarmonyBlock bg0={color1Style} bg1={color2Style} bg2={color3Style} bg3={color0Style} />
            <HarmonyBlock bg0={color1Style} bg1={color2Style} bg2={color0Style} bg3={color3Style} />
            <HarmonyBlock bg0={color1Style} bg1={color0Style} bg2={color2Style} bg3={color3Style} />
            <HarmonyBlock bg0={color1Style} bg1={color0Style} bg2={color3Style} bg3={color2Style} />

            <HarmonyBlock bg0={color2Style} bg1={color3Style} bg2={color0Style} bg3={color1Style} />
            <HarmonyBlock bg0={color2Style} bg1={color3Style} bg2={color1Style} bg3={color0Style} />
            <HarmonyBlock bg0={color2Style} bg1={color1Style} bg2={color3Style} bg3={color0Style} />
            <HarmonyBlock bg0={color2Style} bg1={color1Style} bg2={color0Style} bg3={color3Style} />
            <HarmonyBlock bg0={color2Style} bg1={color0Style} bg2={color3Style} bg3={color1Style} />
            <HarmonyBlock bg0={color2Style} bg1={color0Style} bg2={color1Style} bg3={color3Style} />

            <HarmonyBlock bg0={color3Style} bg1={color2Style} bg2={color1Style} bg3={color0Style} />
            <HarmonyBlock bg0={color3Style} bg1={color2Style} bg2={color0Style} bg3={color1Style} />
            <HarmonyBlock bg0={color3Style} bg1={color1Style} bg2={color0Style} bg3={color2Style} />
            <HarmonyBlock bg0={color3Style} bg1={color1Style} bg2={color2Style} bg3={color0Style} />
            <HarmonyBlock bg0={color3Style} bg1={color0Style} bg2={color2Style} bg3={color1Style} />
            <HarmonyBlock bg0={color3Style} bg1={color0Style} bg2={color1Style} bg3={color2Style} />
        </div>
    );
};

HarmonyBlocks.propTypes = {
    colors: validatePropColors(4)
};

HarmonyBlocks = connect(mapStateToProps)(HarmonyBlocks);

export default HarmonyBlocks;

const HarmonyBlock = ({ bg0, bg1, bg2, bg3 }) => {
    return (
        <div className="HarmonyBlocks__block" style={bg0}>
            <div className="HarmonyBlocks__innerBlock--first position-relative" style={bg1}>
                <div className="HarmonyBlocks__innerBlock--second position-relative" style={bg2}>
                    <div className="HarmonyBlocks__innerBlock--third position-relative" style={bg3} />
                </div>
            </div>
        </div>
    );
};