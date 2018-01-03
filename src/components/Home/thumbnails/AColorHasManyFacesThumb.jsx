import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function AColorHasManyFacesThumb({ color0Style, color1Style, color2Style }) {
    return (
        <HomeLink href="#a-color-has-many-faces" title="a color has many faces">
            <div className="homeLink__thumbnail display-flex">
                <div
                    className="justify-content-center align-items-center display-flex half-width full-height"
                    style={color0Style}
                >
                    <div
                        className="aColorHasManyFaces__innerBlock"
                        style={color2Style}
                    />
                </div>
                <div
                    className="justify-content-center align-items-center display-flex half-width full-height"
                    style={color1Style}
                >
                    <div
                        className="aColorHasManyFaces__innerBlock"
                        style={color2Style}
                    />
                </div>
            </div>
        </HomeLink>
    );
}

AColorHasManyFacesThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    color2Style: PropTypes.object.isRequired
};