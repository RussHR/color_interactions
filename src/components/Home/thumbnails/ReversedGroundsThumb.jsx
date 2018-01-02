import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

export default function ReversedGroundsThumb({ color0Style, color1Style, colorAverageStyle }) {
    return (
        <HomeLink href="#reversed-grounds" title="reversed grounds">
            <div className="homeLink__thumbnail display-flex">
                <div
                    className="justify-content-center align-items-center display-flex half-width full-height"
                    style={color0Style}
                >
                    <div
                        className="ReversedGrounds__innerBlock ReversedGrounds__innerBlock--left"
                        style={colorAverageStyle}
                    />
                </div>
                <div
                    className="justify-content-center align-items-center display-flex half-width full-height"
                    style={color1Style}
                >
                    <div
                        className="ReversedGrounds__innerBlock ReversedGrounds__innerBlock--right"
                        style={colorAverageStyle}
                    />
                </div>
            </div>
        </HomeLink>
    );
}

ReversedGroundsThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    colorAverageStyle: PropTypes.object.isRequired,
};