import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors, getBetweenColor } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './space_illusion.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

const modalContents = (
    <p>
        Just like Illusion of Transparence and Additive and Subtractive,
        there actually aren't any overlapping sections in this exercise. The sections in
        the middle where it looks like one bar is overlapping another are actually mixtures
        of the two main colors, but in different ratios. The further away the mixture is
        from the color of the bar lying horizontally, the more likely it’s going to look
        like it’s lying on top.
    </p>
);

let SpaceIllusion = ({ colors }) => {
    const { color0, color1 } = colors;
    const longBarColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const smallBarsColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };

    return (
        <div className="full-screen">
            <CornerMenu
                colorLabels={['long bar color', 'small bars color']}
                modalContents={modalContents}
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

SpaceIllusion.propTypes = {
    colors: validatePropColors(2)
};

SpaceIllusion = connect(mapStateToProps)(SpaceIllusion);

export default SpaceIllusion;