import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function AdditiveAndSubtractiveThumb({ color0Rgb }) {
    return (
        <HomeLink href="#additive-and-subtractive" title="additive and subtractive">
            <div className="homeLink__thumbnail AdditiveAndSubtractive display-grid">
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />

                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />

                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 2)} />
                <div style={positionToColor(color0Rgb, 2)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />

                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 2)} />
                <div style={positionToColor(color0Rgb, 3)} />
                <div style={positionToColor(color0Rgb, 3)} />
                <div style={positionToColor(color0Rgb, 2)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />

                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 2)} />
                <div style={positionToColor(color0Rgb, 3)} />
                <div style={positionToColor(color0Rgb, 4)} />
                <div style={positionToColor(color0Rgb, 3)} />
                <div style={positionToColor(color0Rgb, 2)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 0)} />

                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 2)} />
                <div style={positionToColor(color0Rgb, 3)} />
                <div style={positionToColor(color0Rgb, 3)} />
                <div style={positionToColor(color0Rgb, 2)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 0)} />

                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 2)} />
                <div style={positionToColor(color0Rgb, 2)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 0)} />

                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 1)} />
                <div style={positionToColor(color0Rgb, 0)} />

                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
                <div style={positionToColor(color0Rgb, 0)} />
            </div>
        </HomeLink>
    );
}

AdditiveAndSubtractiveThumb.propTypes = {
    color0Rgb: PropTypes.object.isRequired,
};

function positionToColor({ r, g, b }, numLayers) {
    const whiteLevel = 4 - numLayers;
    const newR = Math.min(255, r + whiteLevel * 30);
    const newG = Math.min(255, g + whiteLevel * 30);
    const newB = Math.min(255, b + whiteLevel * 30);
    return { backgroundColor: `rgb(${newR}, ${newG}, ${newB})` };
}