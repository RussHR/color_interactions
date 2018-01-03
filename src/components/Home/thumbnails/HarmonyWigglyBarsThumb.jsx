import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';
import { merge } from 'lodash';

export default function HarmonyWigglyBarsThumb({ color0Style, color1Style, color2Style, color3Style }) {
    return (
        <HomeLink href="#harmony-wiggly-bars" title="harmony - wiggly bars">
            <div className="homeLink__thumbnail overflow-hidden" style={color0Style}>
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color1Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color3Style)} />
            </div>
        </HomeLink>
    );
}

HarmonyWigglyBarsThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    color2Style: PropTypes.object.isRequired,
    color3Style: PropTypes.object.isRequired
};

function wigglyBarStyle(color) {
    return merge({}, color, {
        transform: `translate3d(${Math.random() * 10 - 5}%,
            ${Math.random() * 20 - 10}%, 0)
            rotate(${Math.random() * 10 - 5}deg)`
    });
}