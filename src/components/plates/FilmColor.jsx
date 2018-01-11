import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './film_color.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

const defaultFilmIntensity = 20;

const modalContents = (
    <p>
        Seeing color through a film or in a transparent,
        colored liquid are physical phenomena that usually cannot be reproduced through
        2-dimensional means. However, certain mixtures of colors can give the illusion
        of films, liquids, etc. In this case, the
        illusion of a clear film is made simply by adding the same amount of white,
        i.e. the same values of R(ed), G(reen) and
        B(lue), to each color in the strip. A similar effect can be achieved with
        traditional media.
    </p>
);

let FilmColor = ({ colors }) => {
    const { color0, color1, color2, color3 } = colors;

    const colorLabels = ['bar color 1', 'bar color 2', 'bar color 3', 'bar color 4'];

    const color0Style = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const color1Style = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
    const color2Style = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
    const color3Style = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };

    const filmRIntensity = Math.min(
        defaultFilmIntensity,
        255 - color0.r,
        255 - color1.r,
        255 - color2.r,
        255 - color3.r
    );
    const filmGIntensity = Math.min(
        defaultFilmIntensity,
        255 - color0.g,
        255 - color1.g,
        255 - color2.g,
        255 - color3.g
    );
    const filmBIntensity = Math.min(
        defaultFilmIntensity,
        255 - color0.b,
        255 - color1.b,
        255 - color2.b,
        255 - color3.b
    );

    const filmColor0Style = {
        backgroundColor: `rgb(${color0.r + filmRIntensity},
            ${color0.g + filmGIntensity},
            ${color0.b + filmBIntensity})`
    };
    const filmColor1Style = {
        backgroundColor: `rgb(${color1.r + filmRIntensity},
            ${color1.g + filmGIntensity},
            ${color1.b + filmBIntensity})`
    };
    const filmColor2Style = {
        backgroundColor: `rgb(${color2.r + filmRIntensity},
            ${color2.g + filmGIntensity},
            ${color2.b + filmBIntensity})`
    };
    const filmColor3Style = {
        backgroundColor: `rgb(${color3.r + filmRIntensity},
            ${color3.g + filmGIntensity},
            ${color3.b + filmBIntensity})`
    };

    return (
        <div className="full-screen display-flex justify-content-space-evenly align-items-center">
            <CornerMenu colorLabels={colorLabels} modalContents={modalContents} />

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
                    className="FilmColor__bar--secondWithInnerHeight FilmColor__bar--innerWidth display-inline-block"
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
                    className="FilmColor__bar--fourthWithInnerHeight FilmColor__bar--innerWidth display-inline-block"
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
                    className="FilmColor__bar--secondWithInnerHeight FilmColor__bar--innerWidth display-inline-block"
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
                    className="FilmColor__bar--fourthWithInnerHeight FilmColor__bar--innerWidth display-inline-block"
                    style={color3Style}
                />
                <div
                    className="FilmColor__bar--fourthWithInnerHeight FilmColor__bar--sideWidth display-inline-block"
                    style={filmColor3Style}
                />

                <div className="FilmColor__bar--noInner full-width" style={filmColor3Style} />
            </div>
        </div>
    );
};

FilmColor.propTypes = {
    colors: validatePropColors(4)
};

FilmColor = connect(mapStateToProps)(FilmColor);

export default FilmColor;