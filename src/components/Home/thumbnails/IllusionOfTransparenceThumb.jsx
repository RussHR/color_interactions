import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function IllusionOfTransparenceThumb({ color0Style, color1Style, colorAverageStyle }) {
    return (
        <HomeLink href="#illusion-of-transparence" title="illusion of transparence">
            <div className="homeLink__thumbnail">
                <div className="half-width full-height display-inline-block position-relative">
                    <div className="position-absolute IllusionOfTransparence__leftBlock" style={color0Style}>
                        <div
                            className="position-absolute IllusionOfTransparence__leftInnerBlock"
                            style={colorAverageStyle}
                        />
                    </div>
                </div>
                <div className="half-width full-height display-inline-block position-relative">
                    <div className="position-absolute IllusionOfTransparence__rightBlock" style={color1Style} />
                </div>
            </div>
        </HomeLink>
    );
}

IllusionOfTransparenceThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    colorAverageStyle: PropTypes.object.isRequired,
};