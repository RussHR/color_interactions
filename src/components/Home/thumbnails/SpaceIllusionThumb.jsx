import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';
import { getBetweenColor } from '../../../helpers/colorHelpers';


export default function SpaceIllusionThumb({ color0Style, color1Style, color0Rgb, color1Rgb }) {
    return (
        <HomeLink href="#space-illusion" title="space-illusion">
            <div className="homeLink__thumbnail">

                <div className="full-width SpaceIllusion__top display-flex justify-content-space-evenly">
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                </div>

                <div
                    className="full-width SpaceIllusion__middle display-flex justify-content-space-evenly"
                    style={color0Style}
                >
                    <div
                        className="SpaceIllusion__smallBarInner full-height"
                        style={getBetweenColor(color0Rgb, color1Rgb, 0.1)}
                    />
                    <div
                        className="SpaceIllusion__smallBarInner full-height"
                        style={getBetweenColor(color0Rgb, color1Rgb, 0.2)}
                    />
                    <div
                        className="SpaceIllusion__smallBarInner full-height"
                        style={getBetweenColor(color0Rgb, color1Rgb, 0.3)}
                    />
                    <div
                        className="SpaceIllusion__smallBarInner full-height"
                        style={getBetweenColor(color0Rgb, color1Rgb, 0.4)}
                    />
                    <div
                        className="SpaceIllusion__smallBarInner full-height"
                        style={getBetweenColor(color0Rgb, color1Rgb, 0.5)}
                    />
                    <div
                        className="SpaceIllusion__smallBarInner full-height"
                        style={getBetweenColor(color0Rgb, color1Rgb, 0.6)}
                    />
                    <div
                        className="SpaceIllusion__smallBarInner full-height"
                        style={getBetweenColor(color0Rgb, color1Rgb, 0.7)}
                    />
                    <div
                        className="SpaceIllusion__smallBarInner full-height"
                        style={getBetweenColor(color0Rgb, color1Rgb, 0.8)}
                    />
                    <div
                        className="SpaceIllusion__smallBarInner full-height"
                        style={getBetweenColor(color0Rgb, color1Rgb, 0.9)}
                    />
                </div>

                <div className="full-width SpaceIllusion__bottom display-flex justify-content-space-evenly">
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                    <div className="SpaceIllusion__smallBarOuter" style={color1Style} />
                </div>

            </div>
        </HomeLink>
    );
}

SpaceIllusionThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    color0Rgb: PropTypes.object.isRequired,
    color1Rgb: PropTypes.object.isRequired,
};