import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function LighterAndOrDarkerThumb({ color0Style, color1Style, color2Style }) {
    return (
        <HomeLink href="#lighter-and-or-darker" title="lighter and/or darker">
            <div
                className="homeLink__thumbnail position-relative"
                style={color2Style}
            >
                <div
                    className="LighterAndOrDarker__leftBlock position-absolute
                        LighterAndOrDarker__block--thumbnail"
                    style={color0Style}
                />
                <div
                    className="LighterAndOrDarker__rightBlock position-absolute
                        LighterAndOrDarker__block--thumbnail"
                    style={color1Style}
                />
            </div>
        </HomeLink>
    );
}

LighterAndOrDarkerThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    color2Style: PropTypes.object.isRequired,
};