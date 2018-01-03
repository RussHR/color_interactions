import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function HarmonyConfettiThumb({ color0Style, color1Style, color2Style, color3Style, color4Style }) {
    return (
        <HomeLink href="#harmony-confetti" title="harmony - confetti">
            <div className="homeLink__thumbnail overflow-hidden position-relative" style={color0Style}>
                <ConfettiLite style={color1Style} />
                <ConfettiLite style={color2Style} />
                <ConfettiLite style={color3Style} />
                <ConfettiLite style={color4Style} />
            </div>
        </HomeLink>
    );
}

HarmonyConfettiThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    color2Style: PropTypes.object.isRequired,
    color3Style: PropTypes.object.isRequired,
    color4Style: PropTypes.object.isRequired
};

function ConfettiLite({ style }) {
    return (
        <div className="HarmonyConfetti_mainBar full-width position-relative">
            <div
                className="HarmonyConfetti_smallBar HarmonyConfetti_smallBar--first position-absolute"
                style={style}
            />
            <div
                className="HarmonyConfetti_smallBar HarmonyConfetti_smallBar--second position-absolute"
                style={style}
            />
            <div
                className="HarmonyConfetti_smallBar HarmonyConfetti_smallBar--third position-absolute"
                style={style}
            />
            <div
                className="HarmonyConfetti_smallBar HarmonyConfetti_smallBar--fourth position-absolute"
                style={style}
            />
            <div
                className="HarmonyConfetti_largeBox HarmonyConfetti_largeBox--first position-absolute"
                style={style}
            />
            <div
                className="HarmonyConfetti_largeBox HarmonyConfetti_largeBox--second position-absolute"
                style={style}
            />
            <div
                className="HarmonyConfetti_largeBox HarmonyConfetti_largeBox--third position-absolute"
                style={style}
            />
            <div
                className="HarmonyConfetti_largeBox HarmonyConfetti_largeBox--fourth position-absolute"
                style={style}
            />
        </div>
    );
}