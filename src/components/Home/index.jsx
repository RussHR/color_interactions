import React from 'react';
import { connect } from 'react-redux';
import { pick, times } from 'lodash';
import HomeLink from '../HomeLink';
import CornerMenu from '../CornerMenu';

import './home.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

let Home = ({ colors: { color0, color1, color2, color3 } }) => {
    const falseGradientBars = times(5, (i) => {
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

    const averageR = Math.floor((color0.r + color1.r) / 2);
    const averageG = Math.floor((color0.g + color1.g) / 2);
    const averageB = Math.floor((color0.b + color1.b) / 2);
    const averageRGB = { backgroundColor: `rgb(${averageR}, ${averageG}, ${averageB})` };
    const colorLabels = ['Color 1', 'Color 2', 'Color 3', 'Color 4'];

    const color0Style = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const color1Style = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
    const color2Style = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
    const color3Style = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };

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
                                style={color2Style}
                            />
                        </div>
                        <div
                            className="half-width full-height display-inline-block overflow-hidden position-relative"
                            style={color1Style}
                        >
                            <div
                                className="TwoDifferentColorsLookAlike__innerBlock position-absolute"
                                style={color3Style}
                            />
                        </div>
                    </div>
                </HomeLink>
            </div>
        </div>
    );
};

Home = connect(mapStateToProps)(Home);

export default Home;