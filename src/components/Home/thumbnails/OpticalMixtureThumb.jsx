import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function OpticalMixtureThumb({ color0Rgb, color1Rgb }) {
    const opticalMixtureBackground = {
        background: `repeating-linear-gradient(90deg,
            rgb(${color0Rgb.r},
            ${color0Rgb.g}, ${color0Rgb.b}),
            rgb(${color0Rgb.r}, ${color0Rgb.g},
            ${color0Rgb.b}) 2px,
            rgb(${color1Rgb.r},
            ${color1Rgb.g},
            ${color1Rgb.b}) 2px,
            rgb(${color1Rgb.r},
            ${color1Rgb.g},
            ${color1Rgb.b}) 4px )`
    };

    return (
        <HomeLink href="#optical-mixture" title="optical mixture">
            <div className="homeLink__thumbnail" style={opticalMixtureBackground} />
        </HomeLink>
    );
}

OpticalMixtureThumb.propTypes = {
    color0Rgb: PropTypes.object.isRequired,
    color1Rgb: PropTypes.object.isRequired
};