import React from 'react';
import { connect } from 'react-redux';
import { merge, pick } from 'lodash';
import HomeLink from '../HomeLink';
import CornerMenu from '../CornerMenu';
import { getBetweenColor, getRgbOffset } from '../../helpers/colorHelpers';
import {
    AColorHasManyFacesThumb,
    LighterAndOrDarkerThumb,
    FalseGradientThumb,
    VoidThumb,
    ReversedGroundsThumb,
    TwoDifferentColorsLookAlikeThumb
} from './thumbnails';

import './home.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

const modalContents = (
    <div>
        <p>
            This site is a collection of interactive exercises that explore different phenomena of color.
            The exercises are loosely based on ones present in <a
            href="https://en.wikipedia.org/wiki/Josef_Albers" target="_blank">Josef Albers</a>’s renowned book, <a
            href="https://yalebooks.yale.edu/book/9780300179354/interaction-color" target="_blank">
            Interaction of Color.</a> This site exists as a non-profit, educational resource.
        </p>
        <p>
            For the best experience, use an up-to-date desktop browser, such as <a
            href="https://www.google.com/chrome/browser/" target="_blank">Chrome</a>.
            The exercises are not guaranteed to work in other browsers, and they have not been optimized for mobile.
        </p>
        <p>
            To see the project code, visit <a href="https://github.com/RussHR/color_interactions" target="_blank"
            >https://github.com/RussHR/color_interactions</a>.
            <br />
            To find out more about the creator, visit <a href="http://russrinzler.com/" target="_blank"
            >russrinzler.com</a>, or check him out at Mastodon: <a href="https://mastodon.social/@soot" target="_blank"
            >mastodon.social/@soot</a>. And there's <a href="https://twitter.com/russ_rinzler" target="_blank"
            >Twitter</a>, if you absolutely must.
        </p>
        <p>
            Acknowledgements:
            <br />
            Color Picker: <a href="https://casesandberg.github.io/react-color/" target="_blank">
            https://casesandberg.github.io/react-color/</a>
            <br />
            Bezold Effect CSS: <a href="http://lea.verou.me/css3patterns/#steps" target="_blank">
            http://lea.verou.me/css3patterns/#steps</a>
        </p>
    </div>
);

// START FOR HARMONY - BARS
const leftValues = {
    width5: { left: `${Math.random() * 95}%` },
    width1_0: { left: `${Math.random() * 99}%` },
    width1_1: { left: `${Math.random() * 99}%` },
    width4: { left: `${Math.random() * 96}%` }
};
// END FOR HARMONY - BARS

const colorLabels = ['Color 1', 'Color 2', 'Color 3', 'Color 4', 'Color 5'];

let Home = ({ colors: { color0, color1, color2, color3, color4 } }) => {
    const averageR = Math.floor((color0.r + color1.r) / 2);
    const averageG = Math.floor((color0.g + color1.g) / 2);
    const averageB = Math.floor((color0.b + color1.b) / 2);
    const colorAverageStyle = { backgroundColor: `rgb(${averageR}, ${averageG}, ${averageB})` };

    const color0Style = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const color1Style = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
    const color2Style = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
    const color3Style = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };
    const color4Style = { backgroundColor: `rgb(${color4.r}, ${color4.g}, ${color4.b})` };

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

    const leftBezoldStyle = merge({ backgroundColor: 'white' }, commonBezoldStyle);
    const rightBezoldStyle = merge({ backgroundColor: 'black' }, commonBezoldStyle);

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
            <CornerMenu colorLabels={colorLabels} modalContents={modalContents} />
            <h1>color interactions</h1>

            <div className="display-flex Home__homeLinks">
                <AColorHasManyFacesThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    color2Style={color2Style}
                />

                <LighterAndOrDarkerThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    color2Style={color2Style}
                />

                <FalseGradientThumb
                    color0Rgb={color0}
                    color1Rgb={color1}
                    color2Rgb={color2}
                />

                <VoidThumb
                    color0Rgb={color0}
                    color1Rgb={color1}
                />

                <ReversedGroundsThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    colorAverageStyle={colorAverageStyle}
                />

                <TwoDifferentColorsLookAlikeThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    color0Rgb={color0}
                    color1Rgb={color1}
                    color2Rgb={color2}
                />

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
                                    style={colorAverageStyle}
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
                            style={colorAverageStyle}
                        />
                        <div
                            className="IntersectingColors__smallPlate--right full-height full-width position-absolute"
                            style={color1Style}
                        />
                    </div>
                </HomeLink>

                <HomeLink href="#harmony-bars" title="harmony - bars">
                    <div className="homeLink__thumbnail position-relative" style={color1Style}>
                        <div
                            className="position-absolute full-height width-5"
                            style={merge({}, leftValues.width5, color0Style)}
                        />
                        <div
                            className="position-absolute full-height width-1"
                            style={merge({}, leftValues.width1_0, color2Style)}
                        />
                        <div
                            className="position-absolute full-height width-1"
                            style={merge({}, leftValues.width1_1, color2Style)}
                        />
                        <div
                            className="position-absolute full-height width-4"
                            style={merge({}, leftValues.width4, color3Style)}
                        />

                    </div>
                </HomeLink>

                <HomeLink href="#harmony-blocks" title="harmony - blocks">
                    <div className="homeLink__thumbnail" style={color0Style}>
                        <div className="HarmonyBlocks__innerBlock--first position-relative" style={color1Style}>
                            <div className="HarmonyBlocks__innerBlock--second position-relative" style={color2Style}>
                                <div
                                    className="HarmonyBlocks__innerBlock--third position-relative"
                                    style={color3Style}
                                />
                            </div>
                        </div>
                    </div>
                </HomeLink>

                <HomeLink href="#harmony-circles" title="harmony - circles">
                    <div className="homeLink__thumbnail" style={color0Style}>
                        <div className="full-width full-height circle position-relative" style={color1Style}>
                            <div className="HarmonyCircles__secondaryCircle circle absolute-center" style={color2Style}>
                                <div className="half-width half-height circle absolute-center" style={color3Style}>
                                    <div
                                        className="HarmonyCircles__fourthCircle circle absolute-center"
                                        style={color2Style}
                                    >
                                        <div
                                            className="HarmonyCircles__innermostCircle circle absolute-center"
                                            style={color4Style}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </HomeLink>

                <HomeLink href="#harmony-wiggly-bars" title="harmony - wiggly bars">
                    <div className="homeLink__thumbnail overflow-hidden" style={color0Style}>
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color1Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color2Style)} />
                        <div className="HarmonyWigglyBars__figureBar full-width" style={wigglyBarStyle(color3Style)} />
                    </div>
                </HomeLink>

                <HomeLink href="#harmony-confetti" title="harmony - confetti">
                    <div className="homeLink__thumbnail overflow-hidden position-relative" style={color0Style}>
                            <div
                                className="HarmonyConfetti_smallBar HarmonyConfetti_smallBar--first position-absolute"
                                style={color1Style}
                            />
                            <div
                                className="HarmonyConfetti_smallBar HarmonyConfetti_smallBar--second position-absolute"
                                style={color1Style}
                            />
                            <div
                                className="HarmonyConfetti_smallBar HarmonyConfetti_smallBar--third position-absolute"
                                style={color1Style}
                            />
                            <div
                                className="HarmonyConfetti_smallBar HarmonyConfetti_smallBar--fourth position-absolute"
                                style={color1Style}
                            />
                            <div
                                className="HarmonyConfetti_largeBox HarmonyConfetti_largeBox--first position-absolute"
                                style={color1Style}
                            />
                            <div
                                className="HarmonyConfetti_largeBox HarmonyConfetti_largeBox--second position-absolute"
                                style={color1Style}
                            />
                            <div
                                className="HarmonyConfetti_largeBox HarmonyConfetti_largeBox--third position-absolute"
                                style={color1Style}
                            />
                            <div
                                className="HarmonyConfetti_largeBox HarmonyConfetti_largeBox--fourth position-absolute"
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

function wigglyBarStyle(color) {
    return merge({}, color, {
        transform: `translate3d(${Math.random() * 10 - 5}%,
            ${Math.random() * 20 - 10}%, 0)
            rotate(${Math.random() * 10 - 5}deg)`
    });
}