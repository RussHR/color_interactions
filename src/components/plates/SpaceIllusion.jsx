import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './space_illusion.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

let TwoDifferentColorsLookAlike = ({ colors }) => {
    const { color0, color1 } = colors;
    const longBarColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const smallBarsColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };

    return (
        <div className="full-screen">
            <CornerMenu
                colorLabels={['long bar color', 'small bars color']}
            />
            <div className="full-width SpaceIllusion__top display-flex justify-content-space-evenly">
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
            </div>

            <div
                className="full-width SpaceIllusion__middle display-flex justify-content-space-evenly"
                style={longBarColor}
            >
                <div
                    className="SpaceIllusion__smallBarInner full-height"
                    style={getBetweenColor(color0, color1, 0.1)}
                />
                <div
                    className="SpaceIllusion__smallBarInner full-height"
                    style={getBetweenColor(color0, color1, 0.2)}
                />
                <div
                    className="SpaceIllusion__smallBarInner full-height"
                    style={getBetweenColor(color0, color1, 0.3)}
                />
                <div
                    className="SpaceIllusion__smallBarInner full-height"
                    style={getBetweenColor(color0, color1, 0.4)}
                />
                <div
                    className="SpaceIllusion__smallBarInner full-height"
                    style={getBetweenColor(color0, color1, 0.5)}
                />
                <div
                    className="SpaceIllusion__smallBarInner full-height"
                    style={getBetweenColor(color0, color1, 0.6)}
                />
                <div
                    className="SpaceIllusion__smallBarInner full-height"
                    style={getBetweenColor(color0, color1, 0.7)}
                />
                <div
                    className="SpaceIllusion__smallBarInner full-height"
                    style={getBetweenColor(color0, color1, 0.8)}
                />
                <div
                    className="SpaceIllusion__smallBarInner full-height"
                    style={getBetweenColor(color0, color1, 0.9)}
                />
            </div>

            <div className="full-width SpaceIllusion__bottom display-flex justify-content-space-evenly">
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
                <div className="SpaceIllusion__smallBarOuter" style={smallBarsColor} />
            </div>
        </div>
    );
};

TwoDifferentColorsLookAlike.propTypes = {
    colors: validatePropColors(2)
};

TwoDifferentColorsLookAlike = connect(mapStateToProps)(TwoDifferentColorsLookAlike);

export default TwoDifferentColorsLookAlike;

function getBetweenColor({ r: r0, g: g0, b: b0 }, { r: r1, g: g1, b: b1 }, ratio) {
    const newR = Math.round(r0 * (1 - ratio) + r1 * ratio);
    const newG = Math.round(g0 * (1 - ratio) + g1 * ratio);
    const newB = Math.round(b0 * (1 - ratio) + b1 * ratio);

    return { backgroundColor: `rgb(${newR}, ${newG}, ${newB})` };
}