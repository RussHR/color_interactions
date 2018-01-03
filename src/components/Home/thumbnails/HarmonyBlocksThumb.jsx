import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function HarmonyBlocksThumb({ color0Style, color1Style, color2Style, color3Style }) {
    return (
        <HomeLink href="#harmony-blocks" title="harmony - blocks">
            <div className="homeLink__thumbnail" style={color0Style}>
                <div className="HarmonyBlocks__innerBlock--first position-relative" style={color1Style}>
                    <div className="HarmonyBlocks__innerBlock--second position-relative" style={color2Style}>
                        <div
                            className="HarmonyBlocks__innerBlock--third position-relative"
                            style={color3Style}
                        />
                    </div>
                </div>
            </div>
        </HomeLink>
    );
}

HarmonyBlocksThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    color2Style: PropTypes.object.isRequired,
    color3Style: PropTypes.object.isRequired
};