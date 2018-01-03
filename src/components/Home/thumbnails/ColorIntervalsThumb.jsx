import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';
import { getRgbOffset } from '../../../helpers/colorHelpers';


export default function ColorIntervalsThumb({ color0Style, color1Style, color0Rgb, color1Rgb }) {
    // colors for top right
    const actualTopRightOffsetR = getRgbOffset(25, color0Rgb.r, color1Rgb.r);
    const actualTopRightOffsetG = getRgbOffset(25, color0Rgb.g, color1Rgb.g);
    const actualTopRightOffsetB = getRgbOffset(25, color0Rgb.b, color1Rgb.b);
    const outerTopRightStyle = {
        backgroundColor:`rgb(${color0Rgb.r + actualTopRightOffsetR}, ${color0Rgb.g + actualTopRightOffsetG},
            ${color0Rgb.b + actualTopRightOffsetB})`
    };
    const innerTopRightStyle = {
        backgroundColor: `rgb(${color1Rgb.r + actualTopRightOffsetR}, ${color1Rgb.g + actualTopRightOffsetG},
            ${color1Rgb.b + actualTopRightOffsetB})`
    };

    // colors for bottom right
    const actualBottomRightOffsetR = getRgbOffset(-25, color0Rgb.r, color1Rgb.r);
    const actualBottomRightOffsetG = getRgbOffset(25, color0Rgb.g, color1Rgb.g);
    const actualBottomRightOffsetB = getRgbOffset(-25, color0Rgb.b, color1Rgb.b);
    const outerBottomRightStyle = {
        backgroundColor: `rgb(${color0Rgb.r + actualBottomRightOffsetR}, ${color0Rgb.g + actualBottomRightOffsetG},
            ${color0Rgb.b + actualBottomRightOffsetB})`
    };
    const innerBottomRightStyle = {
        backgroundColor: `rgb(${color1Rgb.r + actualBottomRightOffsetR}, ${color1Rgb.g + actualBottomRightOffsetG},
            ${color1Rgb.b + actualBottomRightOffsetB})`
    };

    // colors for bottom left
    const actualBottomLeftOffsetR = getRgbOffset(25, color0Rgb.r, color1Rgb.r);
    const actualBottomLeftOffsetG = getRgbOffset(-25, color0Rgb.g, color1Rgb.g);
    const actualBottomLeftOffsetB = getRgbOffset(25, color0Rgb.b, color1Rgb.b);
    const outerBottomLeftStyle = {
        backgroundColor: `rgb(${color0Rgb.r + actualBottomLeftOffsetR}, ${color0Rgb.g + actualBottomLeftOffsetG},
            ${color0Rgb.b + actualBottomLeftOffsetB})`
    };
    const innerBottomLeftStyle = {
        backgroundColor: `rgb(${color1Rgb.r + actualBottomLeftOffsetR}, ${color1Rgb.g + actualBottomLeftOffsetG},
            ${color1Rgb.b + actualBottomLeftOffsetB})`
    };

    return (
        <HomeLink href="#color-intervals" title="color intervals">
            <div className="homeLink__thumbnail">
                <div
                    className="display-inline-block half-height half-width position-relative"
                    style={color0Style}
                >
                    <div
                        className="position-absolute right-0 bottom-0 half-height half-width"
                        style={color1Style}
                    />
                </div>

                <div
                    className="display-inline-block half-height half-width position-relative"
                    style={outerTopRightStyle}
                >
                    <div
                        className="position-absolute bottom-0 left-0 half-height half-width"
                        style={innerTopRightStyle}
                    />
                </div>

                <div
                    className="display-inline-block half-height half-width position-relative"
                    style={outerBottomLeftStyle}
                >
                    <div
                        className="position-absolute top-0 right-0 half-height half-width"
                        style={innerBottomLeftStyle}
                    />
                </div>

                <div
                    className="display-inline-block half-height half-width position-relative"
                    style={outerBottomRightStyle}
                >
                    <div
                        className="position-absolute top-0 left-0 half-height half-width"
                        style={innerBottomRightStyle}
                    />
                </div>
            </div>
        </HomeLink>
    );
}

ColorIntervalsThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    color0Rgb: PropTypes.object.isRequired,
    color1Rgb: PropTypes.object.isRequired
};