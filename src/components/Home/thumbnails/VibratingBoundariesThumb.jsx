import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function VibratingBoundariesThumb({ color0Style, color1Rgb }) {
    const borderStyle = { border: `2px solid rgb(${color1Rgb.r}, ${color1Rgb.g}, ${color1Rgb.b})` };
    return (
        <HomeLink href="#vibrating-boundaries" title="vibrating boundaries">
            <div className="homeLink__thumbnail position-relative" style={color0Style}>
                <div className="VibratingBoundaries__circle00 circle position-absolute" style={borderStyle}>
                    <div className="VibratingBoundaries__circle01 circle position-absolute" style={borderStyle}>
                        <div className="VibratingBoundaries__circle01 circle position-absolute" style={borderStyle} />
                    </div>
                </div>

                <div className="VibratingBoundaries__circle10 circle position-absolute" style={borderStyle}>
                    <div className="VibratingBoundaries__circle11 circle position-absolute" style={borderStyle}>
                        <div className="VibratingBoundaries__circle12 circle position-absolute" style={borderStyle}>
                            <div className="VibratingBoundaries__circle13 circle position-absolute" style={borderStyle}>
                                <div
                                    className="VibratingBoundaries__circle14 circle position-absolute"
                                    style={borderStyle}
                                >
                                    <div
                                        className="VibratingBoundaries__circle14 circle position-absolute"
                                        style={borderStyle}
                                    >
                                        <div
                                            className="VibratingBoundaries__circle14 circle position-absolute"
                                            style={borderStyle}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="VibratingBoundaries__circle20 circle position-absolute" style={borderStyle}>
                    <div className="VibratingBoundaries__circle21 circle position-absolute" style={borderStyle}>
                        <div className="VibratingBoundaries__circle22 circle position-absolute" style={borderStyle}>
                            <div className="VibratingBoundaries__circle22 circle position-absolute" style={borderStyle}>
                                <div
                                    className="VibratingBoundaries__circle23 circle position-absolute"
                                    style={borderStyle}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLink>
    );
}

VibratingBoundariesThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Rgb: PropTypes.object.isRequired
};