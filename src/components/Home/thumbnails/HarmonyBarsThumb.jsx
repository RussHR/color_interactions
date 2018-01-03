import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';
import { merge } from 'lodash';

const leftValues = {
    width5: { left: `${Math.random() * 95}%` },
    width1_0: { left: `${Math.random() * 99}%` },
    width1_1: { left: `${Math.random() * 99}%` },
    width4: { left: `${Math.random() * 96}%` }
};

export default function HarmonyBarsThumb({ color0Style, color1Style, color2Style, color3Style }) {
    return (
        <HomeLink href="#harmony-bars" title="harmony - bars">
            <div className="homeLink__thumbnail position-relative" style={color1Style}>
                <div
                    className="position-absolute full-height width-5"
                    style={merge({}, leftValues.width5, color0Style)}
                />
                <div
                    className="position-absolute full-height width-1"
                    style={merge({}, leftValues.width1_0, color2Style)}
                />
                <div
                    className="position-absolute full-height width-1"
                    style={merge({}, leftValues.width1_1, color2Style)}
                />
                <div
                    className="position-absolute full-height width-4"
                    style={merge({}, leftValues.width4, color3Style)}
                />

            </div>
        </HomeLink>
    );
}

HarmonyBarsThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    color2Style: PropTypes.object.isRequired,
};