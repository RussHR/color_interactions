import React from 'react';
import HomeLink from '../../HomeLink';
import PropTypes from 'prop-types';

const defaultFilmIntensity = 25;

export default function FilmColorThumb(props) {
    const { color0Style, color1Style, color2Style, color3Style, color0Rgb, color1Rgb, color2Rgb, color3Rgb } = props;

    const filmRIntensity = Math.min(
        defaultFilmIntensity,
        255 - color0Rgb.r,
        255 - color1Rgb.r,
        255 - color2Rgb.r,
        255 - color3Rgb.r
    );
    const filmGIntensity = Math.min(
        defaultFilmIntensity,
        255 - color0Rgb.g,
        255 - color1Rgb.g,
        255 - color2Rgb.g,
        255 - color3Rgb.g
    );
    const filmBIntensity = Math.min(
        defaultFilmIntensity,
        255 - color0Rgb.b,
        255 - color1Rgb.b,
        255 - color2Rgb.b,
        255 - color3Rgb.b
    );

    const filmColor0Style = {
        backgroundColor: `rgb(${color0Rgb.r + filmRIntensity},
            ${color0Rgb.g + filmGIntensity},
            ${color0Rgb.b + filmBIntensity})`
    };
    const filmColor1Style = {
        backgroundColor: `rgb(${color1Rgb.r + filmRIntensity},
            ${color1Rgb.g + filmGIntensity},
            ${color1Rgb.b + filmBIntensity})`
    };
    const filmColor2Style = {
        backgroundColor: `rgb(${color2Rgb.r + filmRIntensity},
            ${color2Rgb.g + filmGIntensity},
            ${color2Rgb.b + filmBIntensity})`
    };
    const filmColor3Style = {
        backgroundColor: `rgb(${color3Rgb.r + filmRIntensity},
            ${color3Rgb.g + filmGIntensity},
            ${color3Rgb.b + filmBIntensity})`
    };

    return (
        <HomeLink href="#film-color" title="film color">
            <div className="homeLink__thumbnail display-flex justify-content-space-evenly align-items-center">
                <div className="FilmColor__bars">
                    <div className="FilmColor__bar--noInner full-width" style={color0Style} />

                    <div
                        className="FilmColor__bar--firstWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={color0Style}
                    />
                    <div
                        className="FilmColor__bar--firstWithInnerHeight FilmColor__bar--innerWidth display-inline-block"
                        style={filmColor0Style}
                    />
                    <div
                        className="FilmColor__bar--firstWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={color0Style}
                    />

                    <div
                        className="FilmColor__bar--secondWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={color1Style}
                    />
                    <div
                        className="FilmColor__bar--secondWithInnerHeight
                                   FilmColor__bar--innerWidth display-inline-block"
                        style={filmColor1Style}
                    />
                    <div
                        className="FilmColor__bar--secondWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={color1Style}
                    />

                    <div
                        className="FilmColor__bar--thirdWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={color2Style}
                    />
                    <div
                        className="FilmColor__bar--thirdWithInnerHeight FilmColor__bar--innerWidth display-inline-block"
                        style={filmColor2Style}
                    />
                    <div
                        className="FilmColor__bar--thirdWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={color2Style}
                    />

                    <div
                        className="FilmColor__bar--fourthWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={color3Style}
                    />
                    <div
                        className="FilmColor__bar--fourthWithInnerHeight
                                   FilmColor__bar--innerWidth display-inline-block"
                        style={filmColor3Style}
                    />
                    <div
                        className="FilmColor__bar--fourthWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={color3Style}
                    />

                    <div className="FilmColor__bar--noInner full-width" style={color3Style} />
                </div>

                <div className="FilmColor__bars">
                    <div className="FilmColor__bar--noInner full-width" style={filmColor0Style} />

                    <div
                        className="FilmColor__bar--firstWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={filmColor0Style}
                    />
                    <div
                        className="FilmColor__bar--firstWithInnerHeight FilmColor__bar--innerWidth display-inline-block"
                        style={color0Style}
                    />
                    <div
                        className="FilmColor__bar--firstWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={filmColor0Style}
                    />

                    <div
                        className="FilmColor__bar--secondWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={filmColor1Style}
                    />
                    <div
                        className="FilmColor__bar--secondWithInnerHeight
                                   FilmColor__bar--innerWidth display-inline-block"
                        style={color1Style}
                    />
                    <div
                        className="FilmColor__bar--secondWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={filmColor1Style}
                    />

                    <div
                        className="FilmColor__bar--thirdWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={filmColor2Style}
                    />
                    <div
                        className="FilmColor__bar--thirdWithInnerHeight FilmColor__bar--innerWidth display-inline-block"
                        style={color2Style}
                    />
                    <div
                        className="FilmColor__bar--thirdWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={filmColor2Style}
                    />

                    <div
                        className="FilmColor__bar--fourthWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={filmColor3Style}
                    />
                    <div
                        className="FilmColor__bar--fourthWithInnerHeight
                                   FilmColor__bar--innerWidth display-inline-block"
                        style={color3Style}
                    />
                    <div
                        className="FilmColor__bar--fourthWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                        style={filmColor3Style}
                    />

                    <div className="FilmColor__bar--noInner full-width" style={filmColor3Style} />
                </div>
            </div>
        </HomeLink>
    );
}

FilmColorThumb.propTypes = {
    color0Style: PropTypes.object.isRequired,
    color1Style: PropTypes.object.isRequired,
    color2Style: PropTypes.object.isRequired,
    color3Style: PropTypes.object.isRequired,
    color0Rgb: PropTypes.object.isRequired,
    color1Rgb: PropTypes.object.isRequired,
    color2Rgb: PropTypes.object.isRequired,
    color3Rgb: PropTypes.object.isRequired,
};