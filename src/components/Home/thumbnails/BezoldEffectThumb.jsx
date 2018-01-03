import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';
import { merge } from 'lodash';

export default function BezoldEffectThumb({ color0Rgb }) {
    const commonBezoldStyle = {
        backgroundImage:
            `linear-gradient(335deg, rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b}) 23px, transparent 23px),
                linear-gradient(155deg, rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b}) 23px, transparent 23px),
                linear-gradient(335deg, rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b}) 23px, transparent 23px),
                linear-gradient(155deg, rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b}) 23px, transparent 23px),

                linear-gradient(335deg, rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b}) 10px, transparent 10px),
                linear-gradient(155deg, rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b}) 10px, transparent 10px),
                linear-gradient(335deg, rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b}) 10px, transparent 10px),
                linear-gradient(155deg, rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b}) 10px, transparent 10px)`
    };

    const leftBezoldStyle = merge({ backgroundColor: 'white' }, commonBezoldStyle);
    const rightBezoldStyle = merge({ backgroundColor: 'black' }, commonBezoldStyle);

    return (
        <HomeLink href="#bezold-effect" title="bezold effect">
            <div className="homeLink__thumbnail display-flex justify-content-space-evenly align-items-center">
                <div className="BezoldEffect__bricks" style={leftBezoldStyle} />
                <div className="BezoldEffect__bricks" style={rightBezoldStyle} />
            </div>
        </HomeLink>
    );
}

BezoldEffectThumb.propTypes = {
    color0Rgb: PropTypes.object.isRequired
};