import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';
import { times } from 'lodash';

export default function FalseGradientThumb({ color0Rgb, color1Rgb, color2Rgb }) {
    const falseGradientBars = times(18, (i) => {
        let style;
        if (i % 2 == 0) {
            style = {
                width: '20%',
                background: `linear-gradient(rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b}),
                    rgb(${color1Rgb.r}, ${color1Rgb.g}, ${color1Rgb.b}))`
            };
        } else {
            style = { width: '20%', backgroundColor: `rgb(${color2Rgb.r}, ${color2Rgb.g}, ${color2Rgb.b})` };
        }
        return (
            <div key={`gradient-${i}`} style={style} />
        );
    });

    return (
        <HomeLink href="#false-gradient" title="false gradient">
            <div className="homeLink__thumbnail display-flex">
                {falseGradientBars}
            </div>
        </HomeLink>
    );
}

FalseGradientThumb.propTypes = {
    color0Rgb: PropTypes.object.isRequired,
    color1Rgb: PropTypes.object.isRequired,
    color2Rgb: PropTypes.object.isRequired,
};