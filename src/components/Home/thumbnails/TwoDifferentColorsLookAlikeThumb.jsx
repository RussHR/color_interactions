import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function TwoDifferentColorsLookAlikeThumb(props) {
    const { color0Style, color1Style, color0Rgb, color1Rgb, color2Rgb } = props;

    const innerBlockLeftColor = {
        r: Math.round((color0Rgb.r * 0.25) + color2Rgb.r * 0.75),
        g: Math.round((color0Rgb.g * 0.25) + color2Rgb.g * 0.75),
        b: Math.round((color0Rgb.b * 0.25) + color2Rgb.b * 0.75)
    };
    const innerBlockRightColor = {
        r: Math.round((color1Rgb.r * 0.25) + color2Rgb.r * 0.75),
        g: Math.round((color1Rgb.g * 0.25) + color2Rgb.g * 0.75),
        b: Math.round((color1Rgb.b * 0.25) + color2Rgb.b * 0.75)
    };

    const innerBlockLeftStyle = {
        backgroundColor: `rgb(${innerBlockLeftColor.r}, ${innerBlockLeftColor.g}, ${innerBlockLeftColor.b})`
    };
    const innerBlockRightStyle = {
        backgroundColor: `rgb(${innerBlockRightColor.r}, ${innerBlockRightColor.g}, ${innerBlockRightColor.b})`
    };

    return (
        <HomeLink href="#two-different-colors-look-alike" title="two different colors look alike">
            <div className="homeLink__thumbnail display-flex">
                <div
                    className="half-width full-height display-inline-block overflow-hidden position-relative"
                    style={color0Style}
                >
                    <div
                        className="TwoDifferentColorsLookAlike__innerBlock position-absolute"
                        style={innerBlockLeftStyle}
                    />
                </div>
                <div
                    className="half-width full-height display-inline-block overflow-hidden position-relative"
                    style={color1Style}
                >
                    <div
                        className="TwoDifferentColorsLookAlike__innerBlock position-absolute"
                        style={innerBlockRightStyle}
                    />
                </div>
            </div>
        </HomeLink>
    );
}

TwoDifferentColorsLookAlikeThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    color0Rgb: PropTypes.object.isRequired,
    color1Rgb: PropTypes.object.isRequired,
    color2Rgb: PropTypes.object.isRequired
};