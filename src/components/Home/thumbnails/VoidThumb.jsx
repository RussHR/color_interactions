import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';
import { times } from 'lodash';

export default function VoidThumb({ color0Rgb, color1Rgb }) {
    const voidBars = times(12, (i) => {
        let style;
        if (i % 2 == 0) {
            style = {
                width: '20%',
                background: `linear-gradient(rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b}),
                    rgb(${color1Rgb.r}, ${color1Rgb.g}, ${color1Rgb.b}))`
            };
        } else {
            style = {
                width: '20%',
                background: `linear-gradient(rgb(${color1Rgb.r}, ${color1Rgb.g}, ${color1Rgb.b}),
                    rgb(${color0Rgb.r}, ${color0Rgb.g}, ${color0Rgb.b}))`
            };
        }
        return (
            <div key={`void-${i}`} style={style} />
        );
    });

    return (
        <HomeLink href="#void" title="void">
            <div className="homeLink__thumbnail display-flex">
                {voidBars}
            </div>
        </HomeLink>
    );
}

VoidThumb.propTypes = {
    color0Rgb: PropTypes.object.isRequired,
    color1Rgb: PropTypes.object.isRequired,
};