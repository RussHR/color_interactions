import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';
import Color from 'color';

export default function VanishingBoundariesThumb({ color0Rgb }) {
    const secondColorStyle = getSimilarLightnessColor(color0Rgb);
    const color0Style = { backgroundColor: `rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b})` };

    return (
        <HomeLink href="#vanishing-boundaries" title="vanishing boundaries">
            <div className="homeLink__thumbnail overflow-hidden" style={color0Style}>
                <SkewedBar bgColorStyle={color0Style} />
                <SkewedBar bgColorStyle={secondColorStyle} />
                <SkewedBar bgColorStyle={color0Style} />
                <SkewedBar bgColorStyle={secondColorStyle} />
                <SkewedBar bgColorStyle={color0Style} />
                <SkewedBar bgColorStyle={secondColorStyle} />
                <SkewedBar bgColorStyle={color0Style} />
                <SkewedBar bgColorStyle={secondColorStyle} />
                <SkewedBar bgColorStyle={color0Style} />
                <SkewedBar bgColorStyle={secondColorStyle} />
            </div>
        </HomeLink>
    );
}

VanishingBoundariesThumb.propTypes = {
    color0Rgb: PropTypes.object.isRequired
};

const SkewedBar = ({ bgColorStyle }) => {
    return (
        <div className="VanishingBoundaries__verticalBar full-height display-inline-block">
            <div
                className="VanishingBoundaries__skewedBar full-width VanishingBoundaries__skewedBar--transitionBg"
                style={bgColorStyle}
            />
            <div
                className="VanishingBoundaries__skewedBar full-width VanishingBoundaries__skewedBar--transitionBg"
                style={bgColorStyle}
            />
            <div
                className="VanishingBoundaries__skewedBar full-width VanishingBoundaries__skewedBar--transitionBg"
                style={bgColorStyle}
            />
            <div
                className="VanishingBoundaries__skewedBar full-width VanishingBoundaries__skewedBar--transitionBg"
                style={bgColorStyle}
            />
            <div
                className="VanishingBoundaries__skewedBar full-width VanishingBoundaries__skewedBar--transitionBg"
                style={bgColorStyle}
            />
            <div
                className="VanishingBoundaries__skewedBar full-width VanishingBoundaries__skewedBar--transitionBg"
                style={bgColorStyle}
            />
            <div
                className="VanishingBoundaries__skewedBar full-width VanishingBoundaries__skewedBar--transitionBg"
                style={bgColorStyle}
            />
            <div
                className="VanishingBoundaries__skewedBar full-width VanishingBoundaries__skewedBar--transitionBg"
                style={bgColorStyle}
            />
            <div
                className="VanishingBoundaries__skewedBar full-width VanishingBoundaries__skewedBar--transitionBg"
                style={bgColorStyle}
            />
            <div
                className="VanishingBoundaries__skewedBar full-width VanishingBoundaries__skewedBar--transitionBg"
                style={bgColorStyle}
            />
        </div>
    );
};

const getSimilarLightnessColor = (colorRgb) => {
    const color0Hsl = new Color.rgb(colorRgb).hsl().object();

    return {
        backgroundColor: `hsl(${color0Hsl.h  + (Math.random() * 50) - 25}, ${color0Hsl.s}%, ${color0Hsl.l}%)`
    };
};