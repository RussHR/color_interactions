import React from 'react';
import { connect } from 'react-redux';
import { assign, pick, times } from 'lodash';
import HomeLink from '../HomeLink';
import CornerMenu from '../CornerMenu';
import { getBetweenColor, getRgbOffset } from '../../helpers/colorHelpers';

import './home.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

let Home = ({ colors: { color0, color1, color2 } }) => {
    const falseGradientBars = times(18, (i) => {
        let style;
        if (i % 2 == 0) {
            style = {
                width: '20%',
                background: `linear-gradient(rgb(${color0.r}, ${color0.g}, ${color0.b}),
                    rgb(${color1.r}, ${color1.g}, ${color1.b}))`
            };
        } else {
            style = { width: '20%', backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
        }
        return (
            <div key={`gradient-${i}`} style={style} />
        );
    });

    const voidBars = times(12, (i) => {
        let style;
        if (i % 2 == 0) {
            style = {
                width: '20%',
                background: `linear-gradient(rgb(${color0.r}, ${color0.g}, ${color0.b}),
                    rgb(${color1.r}, ${color1.g}, ${color1.b}))`
            };
        } else {
            style = {
                width: '20%',
                background: `linear-gradient(rgb(${color1.r}, ${color1.g}, ${color1.b}),
                    rgb(${color0.r}, ${color0.g}, ${color0.b}))`
            };
        }
        return (
            <div key={`void-${i}`} style={style} />
        );
    });

    // START TwoDifferentColorsLookAlike Thumbnail stuff
    const innerBlockLeftColor = {
        r: Math.round((color0.r * 0.25) + color2.r * 0.75),
        g: Math.round((color0.g * 0.25) + color2.g * 0.75),
        b: Math.round((color0.b * 0.25) + color2.b * 0.75)
    };
    const innerBlockRightColor = {
        r: Math.round((color1.r * 0.25) + color2.r * 0.75),
        g: Math.round((color1.g * 0.25) + color2.g * 0.75),
        b: Math.round((color1.b * 0.25) + color2.b * 0.75)
    };

    const innerBlockLeftStyle = {
        backgroundColor: `rgb(${innerBlockLeftColor.r}, ${innerBlockLeftColor.g}, ${innerBlockLeftColor.b})`
    };
    const innerBlockRightStyle = {
        backgroundColor: `rgb(${innerBlockRightColor.r}, ${innerBlockRightColor.g}, ${innerBlockRightColor.b})`
    };
    // END TwoDifferentColorsLookAlike Thumbnail stuff

    const averageR = Math.floor((color0.r + color1.r) / 2);
    const averageG = Math.floor((color0.g + color1.g) / 2);
    const averageB = Math.floor((color0.b + color1.b) / 2);
    const averageRGB = { backgroundColor: `rgb(${averageR}, ${averageG}, ${averageB})` };
    const colorLabels = ['Color 1', 'Color 2', 'Color 3'];

    const color0Style = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const color1Style = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
    const color2Style = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };

    const opticalMixtureBackground = {
        background: `repeating-linear-gradient(90deg,
            rgb(${color0.r},
            ${color0.g}, ${color0.b}),
            rgb(${color0.r}, ${color0.g},
            ${color0.b}) 2px,
            rgb(${color1.r},
            ${color1.g},
            ${color1.b}) 2px,
            rgb(${color1.r},
            ${color1.g},
            ${color1.b}) 4px )`
    };

    const commonBezoldStyle = {
        backgroundImage:
            `linear-gradient(335deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 23px, transparent 23px),
                linear-gradient(155deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 23px, transparent 23px),
                linear-gradient(335deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 23px, transparent 23px),
                linear-gradient(155deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 23px, transparent 23px),

                linear-gradient(335deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 10px, transparent 10px),
                linear-gradient(155deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 10px, transparent 10px),
                linear-gradient(335deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 10px, transparent 10px),
                linear-gradient(155deg, rgb(${color0.r}, ${color0.g}, ${color0.b}) 10px, transparent 10px)`
    };

    const leftBezoldStyle = assign({ backgroundColor: 'white' }, commonBezoldStyle);
    const rightBezoldStyle = assign({ backgroundColor: 'black' }, commonBezoldStyle);

    // START for COLOR INTERVALS
    // colors for top right
    const actualTopRightOffsetR = getRgbOffset(25, color0.r, color1.r);
    const actualTopRightOffsetG = getRgbOffset(25, color0.g, color1.g);
    const actualTopRightOffsetB = getRgbOffset(25, color0.b, color1.b);
    const outerTopRightStyle = {
        backgroundColor:`rgb(${color0.r + actualTopRightOffsetR}, ${color0.g + actualTopRightOffsetG},
            ${color0.b + actualTopRightOffsetB})`
    };
    const innerTopRightStyle = {
        backgroundColor: `rgb(${color1.r + actualTopRightOffsetR}, ${color1.g + actualTopRightOffsetG},
            ${color1.b + actualTopRightOffsetB})`
    };

    // colors for bottom right
    const actualBottomRightOffsetR = getRgbOffset(-25, color0.r, color1.r);
    const actualBottomRightOffsetG = getRgbOffset(25, color0.g, color1.g);
    const actualBottomRightOffsetB = getRgbOffset(-25, color0.b, color1.b);
    const outerBottomRightStyle = {
        backgroundColor: `rgb(${color0.r + actualBottomRightOffsetR}, ${color0.g + actualBottomRightOffsetG},
            ${color0.b + actualBottomRightOffsetB})`
    };
    const innerBottomRightStyle = {
        backgroundColor: `rgb(${color1.r + actualBottomRightOffsetR}, ${color1.g + actualBottomRightOffsetG},
            ${color1.b + actualBottomRightOffsetB})`
    };

    // colors for bottom left
    const actualBottomLeftOffsetR = getRgbOffset(25, color0.r, color1.r);
    const actualBottomLeftOffsetG = getRgbOffset(-25, color0.g, color1.g);
    const actualBottomLeftOffsetB = getRgbOffset(25, color0.b, color1.b);
    const outerBottomLeftStyle = {
        backgroundColor: `rgb(${color0.r + actualBottomLeftOffsetR}, ${color0.g + actualBottomLeftOffsetG},
            ${color0.b + actualBottomLeftOffsetB})`
    };
    const innerBottomLeftStyle = {
        backgroundColor: `rgb(${color1.r + actualBottomLeftOffsetR}, ${color1.g + actualBottomLeftOffsetG},
            ${color1.b + actualBottomLeftOffsetB})`
    };
    // END OF COLOR INTERVALS

    return (
        <div className="full-screen Home">
            <CornerMenu colorLabels={colorLabels} />
            <h1>color interactions</h1>

            <div className="display-flex Home__homeLinks">
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

                <HomeLink href="#lighter-and-or-darker" title="lighter and/or darker">
                    <div
                        className="homeLink__thumbnail position-relative"
                        style={color2Style}
                    >
                        <div
                            className="LighterAndOrDarker__leftBlock position-absolute
                                LighterAndOrDarker__block--thumbnail"
                            style={color0Style}
                        />
                        <div
                            className="LighterAndOrDarker__rightBlock position-absolute
                                LighterAndOrDarker__block--thumbnail"
                            style={color1Style}
                        />
                    </div>
                </HomeLink>

                <HomeLink href="#false-gradient" title="false gradient">
                    <div className="homeLink__thumbnail display-flex">
                        {falseGradientBars}
                    </div>
                </HomeLink>

                <HomeLink href="#void" title="void">
                    <div className="homeLink__thumbnail display-flex">
                        {voidBars}
                    </div>
                </HomeLink>

                <HomeLink href="#reversed-grounds" title="reversed grounds">
                    <div className="homeLink__thumbnail display-flex">
                        <div
                            className="justify-content-center align-items-center display-flex half-width full-height"
                            style={color0Style}
                        >
                            <div
                                className="ReversedGrounds__innerBlock ReversedGrounds__innerBlock--left"
                                style={averageRGB}
                            />
                        </div>
                        <div
                            className="justify-content-center align-items-center display-flex half-width full-height"
                            style={color1Style}
                        >
                            <div
                                className="ReversedGrounds__innerBlock ReversedGrounds__innerBlock--right"
                                style={averageRGB}
                            />
                        </div>
                    </div>
                </HomeLink>

                <HomeLink href="#two-different-colors-look-alike" title="two different colors look alike">
                    <div className="homeLink__thumbnail display-flex">
                        <div
                            className="half-width full-height display-inline-block overflow-hidden position-relative"
                            style={color0Style}
                        >
                            <div
                                className="TwoDifferentColorsLookAlike__innerBlock position-absolute"
                                style={innerBlockLeftStyle}
                            />
                        </div>
                        <div
                            className="half-width full-height display-inline-block overflow-hidden position-relative"
                            style={color1Style}
                        >
                            <div
                                className="TwoDifferentColorsLookAlike__innerBlock position-absolute"
                                style={innerBlockRightStyle}
                            />
                        </div>
                    </div>
                </HomeLink>

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

                <HomeLink href="#illusion-of-transparence" title="illusion of transparence">
                    <div className="homeLink__thumbnail">
                        <div className="half-width full-height display-inline-block position-relative">
                            <div className="position-absolute IllusionOfTransparence__leftBlock" style={color0Style}>
                                <div
                                    className="position-absolute IllusionOfTransparence__leftInnerBlock"
                                    style={averageRGB}
                                />
                            </div>
                        </div>
                        <div className="half-width full-height display-inline-block position-relative">
                            <div className="position-absolute IllusionOfTransparence__rightBlock" style={color1Style} />
                        </div>
                    </div>
                </HomeLink>

                <HomeLink href="#additive-and-subtractive" title="additive and subtractive">
                    <div className="homeLink__thumbnail AdditiveAndSubtractive display-grid">
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />

                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />

                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 2)} />
                        <div style={positionToColor(color0, 2)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />

                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 2)} />
                        <div style={positionToColor(color0, 3)} />
                        <div style={positionToColor(color0, 3)} />
                        <div style={positionToColor(color0, 2)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />

                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 2)} />
                        <div style={positionToColor(color0, 3)} />
                        <div style={positionToColor(color0, 4)} />
                        <div style={positionToColor(color0, 3)} />
                        <div style={positionToColor(color0, 2)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 0)} />

                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 2)} />
                        <div style={positionToColor(color0, 3)} />
                        <div style={positionToColor(color0, 3)} />
                        <div style={positionToColor(color0, 2)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 0)} />

                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 2)} />
                        <div style={positionToColor(color0, 2)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 0)} />

                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 1)} />
                        <div style={positionToColor(color0, 0)} />

                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                        <div style={positionToColor(color0, 0)} />
                    </div>
                </HomeLink>

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

                <HomeLink href="#optical-mixture" title="optical mixture">
                    <div className="homeLink__thumbnail" style={opticalMixtureBackground} />
                </HomeLink>

                <HomeLink href="#bezold-effect" title="bezold effect">
                    <div className="homeLink__thumbnail display-flex justify-content-space-evenly align-items-center">
                        <div className="BezoldEffect__bricks" style={leftBezoldStyle} />
                        <div className="BezoldEffect__bricks" style={rightBezoldStyle} />
                    </div>
                </HomeLink>

                <HomeLink href="#color-intervals" title="color intervals">
                    <div className="homeLink__thumbnail">
                        <div
                            className="display-inline-block half-height half-width position-relative"
                            style={color0Style}
                        >
                            <div
                                className="position-absolute right-0 bottom-0 half-height half-width"
                                style={color1Style}
                            />
                        </div>

                        <div
                            className="display-inline-block half-height half-width position-relative"
                            style={outerTopRightStyle}
                        >
                            <div
                                className="position-absolute bottom-0 left-0 half-height half-width"
                                style={innerTopRightStyle}
                            />
                        </div>

                        <div
                            className="display-inline-block half-height half-width position-relative"
                            style={outerBottomLeftStyle}
                        >
                            <div
                                className="position-absolute top-0 right-0 half-height half-width"
                                style={innerBottomLeftStyle}
                            />
                        </div>

                        <div
                            className="display-inline-block half-height half-width position-relative"
                            style={outerBottomRightStyle}
                        >
                            <div
                                className="position-absolute top-0 left-0 half-height half-width"
                                style={innerBottomRightStyle}
                            />
                        </div>
                    </div>
                </HomeLink>

                <HomeLink href="#intersecting-colors" title="intersecting colors">
                    <div className="homeLink__thumbnail position-relative overflow-hidden">
                        <div
                            className="IntersectingColors__smallPlate full-height position-absolute top-0 left-0"
                            style={color0Style}
                        />
                        <div
                            className={`IntersectingColors__smallPlate IntersectingColors__smallPlate--inner full-height
                                position-absolute top-0`}
                            style={averageRGB}
                        />
                        <div
                            className="IntersectingColors__smallPlate--right full-height full-width position-absolute"
                            style={color1Style}
                        />
                    </div>
                </HomeLink>
            </div>
        </div>
    );
};

Home = connect(mapStateToProps)(Home);

export default Home;

function positionToColor({ r, g, b }, numLayers) {
    const whiteLevel = 4 - numLayers;
    const newR = Math.min(255, r + whiteLevel * 30);
    const newG = Math.min(255, g + whiteLevel * 30);
    const newB = Math.min(255, b + whiteLevel * 30);
    return { backgroundColor: `rgb(${newR}, ${newG}, ${newB})` };
}