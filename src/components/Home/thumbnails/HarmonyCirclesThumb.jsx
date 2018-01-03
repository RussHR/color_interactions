import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function HarmonyCirclesThumb({ color0Style, color1Style, color2Style, color3Style, color4Style }) {
    return (
        <HomeLink href="#harmony-circles" title="harmony - circles">
            <div className="homeLink__thumbnail" style={color0Style}>
                <div className="full-width full-height circle position-relative" style={color1Style}>
                    <div className="HarmonyCircles__secondaryCircle circle absolute-center" style={color2Style}>
                        <div className="half-width half-height circle absolute-center" style={color3Style}>
                            <div
                                className="HarmonyCircles__fourthCircle circle absolute-center"
                                style={color2Style}
                            >
                                <div
                                    className="HarmonyCircles__innermostCircle circle absolute-center"
                                    style={color4Style}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLink>
    );
}

HarmonyCirclesThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    color2Style: PropTypes.object.isRequired,
    color3Style: PropTypes.object.isRequired,
    color4Style: PropTypes.object.isRequired
};