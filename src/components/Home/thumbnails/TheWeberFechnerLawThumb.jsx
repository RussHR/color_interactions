import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

const amountOfBlackAdded = 20;

export default function TheWeberFechnerLawThumb({ color0Rgb }) {
    const baseColorStyle = { backgroundColor: `rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b})` };

    const blackAddedX1Style = {
        backgroundColor: `rgb(${Math.max(color0Rgb.r - amountOfBlackAdded, 0)},
            ${Math.max(color0Rgb.g - amountOfBlackAdded, 0)},
            ${Math.max(color0Rgb.b - amountOfBlackAdded, 0)})`
    };
    const blackAddedX2Style = {
        backgroundColor: `rgb(${Math.max(color0Rgb.r - amountOfBlackAdded * 2, 0)},
            ${Math.max(color0Rgb.g - amountOfBlackAdded * 2, 0)},
            ${Math.max(color0Rgb.b - amountOfBlackAdded * 2, 0)})`
    };
    const blackAddedX3Style = {
        backgroundColor: `rgb(${Math.max(color0Rgb.r - amountOfBlackAdded * 3, 0)},
            ${Math.max(color0Rgb.g - amountOfBlackAdded * 3, 0)},
            ${Math.max(color0Rgb.b - amountOfBlackAdded * 3, 0)})`
    };
    const blackAddedX4Style = {
        backgroundColor: `rgb(${Math.max(color0Rgb.r - amountOfBlackAdded * 4, 0)},
            ${Math.max(color0Rgb.g - amountOfBlackAdded * 4, 0)},
            ${Math.max(color0Rgb.b - amountOfBlackAdded * 4, 0)})`
    };
    const blackAddedX8Style = {
        backgroundColor: `rgb(${Math.max(color0Rgb.r - amountOfBlackAdded * 8, 0)},
            ${Math.max(color0Rgb.g - amountOfBlackAdded * 8, 0)},
            ${Math.max(color0Rgb.b - amountOfBlackAdded * 8, 0)})`
    };

    // left bar color styles; adds black multiplicatively

    // right bar color styles; adds black exponentially
    return (
        <HomeLink href="#the-weber-fechner-law" title="the weber fechner law">
            <div className="homeLink__thumbnail display-flex justify-content-space-evenly align-items-center">

                <div className="TheWeberFechnerLaw__bars">
                    <div style={baseColorStyle} className="TheWeberFechnerLaw__bar" />
                    <div style={blackAddedX1Style} className="TheWeberFechnerLaw__bar" />
                    <div style={blackAddedX2Style} className="TheWeberFechnerLaw__bar" />
                    <div style={blackAddedX3Style} className="TheWeberFechnerLaw__bar" />
                    <div style={blackAddedX4Style} className="TheWeberFechnerLaw__bar" />
                </div>

                <div className="TheWeberFechnerLaw__bars">
                    <div style={baseColorStyle} className="TheWeberFechnerLaw__bar" />
                    <div style={blackAddedX1Style} className="TheWeberFechnerLaw__bar" />
                    <div style={blackAddedX2Style} className="TheWeberFechnerLaw__bar" />
                    <div style={blackAddedX4Style} className="TheWeberFechnerLaw__bar" />
                    <div style={blackAddedX8Style} className="TheWeberFechnerLaw__bar" />
                </div>
            </div>
        </HomeLink>
    );
}

TheWeberFechnerLawThumb.propTypes = {
    color0Rgb: PropTypes.object.isRequired
};