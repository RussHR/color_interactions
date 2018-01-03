import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function AColorHasManyFacesThumb({ color0Style, color1Style, colorAverageStyle }) {
    return (
        <HomeLink href="#intersecting-colors" title="intersecting colors">
            <div className="homeLink__thumbnail position-relative overflow-hidden">
                <div
                    className="IntersectingColors__smallPlate full-height position-absolute top-0 left-0"
                    style={color0Style}
                />
                <div
                    className={`IntersectingColors__smallPlate IntersectingColors__smallPlate--inner full-height
                        position-absolute top-0`}
                    style={colorAverageStyle}
                />
                <div
                    className="IntersectingColors__smallPlate--right full-height full-width position-absolute"
                    style={color1Style}
                />
            </div>
        </HomeLink>
    );
}

AColorHasManyFacesThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    colorAverageStyle: PropTypes.object.isRequired,
};