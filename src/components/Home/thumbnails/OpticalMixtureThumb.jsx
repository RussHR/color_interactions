import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function OpticalMixtureThumb({ color0Rgb, color1Rgb }) {
    const bgColor1 = `rgb(${color1Rgb.r}, ${color1Rgb.g}, ${color1Rgb.b})`;

    const opticalMixtureBackground = {
        backgroundColor: `rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b})`,
        backgroundImage:
            `linear-gradient(45deg, ${bgColor1} 25%, transparent 25%),
            linear-gradient(-45deg, ${bgColor1} 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, ${bgColor1} 75%),
            linear-gradient(-45deg, transparent 75%, ${bgColor1} 75%)`,
        backgroundSize: '8px 8px',
        backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px'
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