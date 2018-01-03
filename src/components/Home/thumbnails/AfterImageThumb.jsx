import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function AfterImageThumb({ color0Style }) {
    return (
        <HomeLink href="#after-image" title="after image">
            <div className={`homeLink__thumbnail AfterImage display-flex justify-content-center
                align-items-center`}>
                <div
                    className="homeLink__thumbnailPiece--AfterImageCircle position-relative circle"
                    style={color0Style}
                >
                    <div className="AfterImage__centerDot absolute-center" />
                </div>
            </div>
        </HomeLink>
    );
}

AfterImageThumb.propTypes = {
    color0Style: PropTypes.object.isRequired
};