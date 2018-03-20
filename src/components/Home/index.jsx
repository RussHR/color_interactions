import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import CornerMenu from '../CornerMenu';
import {
    AColorHasManyFacesThumb,
    LighterAndOrDarkerThumb,
    FalseGradientThumb,
    VoidThumb,
    ReversedGroundsThumb,
    TwoDifferentColorsLookAlikeThumb,
    AfterImageThumb,
    IllusionOfTransparenceThumb,
    AdditiveAndSubtractiveThumb,
    SpaceIllusionThumb,
    OpticalMixtureThumb,
    BezoldEffectThumb,
    ColorIntervalsThumb,
    IntersectingColorsThumb,
    HarmonyBarsThumb,
    HarmonyBlocksThumb,
    HarmonyCirclesThumb,
    HarmonyWigglyBarsThumb,
    HarmonyConfettiThumb,
    FilmColorThumb,
    TheWeberFechnerLawThumb,
    VibratingBoundariesThumb,
    VanishingBoundariesThumb
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
            UI Acknowledgements:
            <br />
            Color Picker: <a href="https://casesandberg.github.io/react-color/" target="_blank">
            https://casesandberg.github.io/react-color/</a>
            <br />
            Bezold Effect CSS: <a href="http://lea.verou.me/css3patterns/#steps" target="_blank">
            http://lea.verou.me/css3patterns/#steps</a>
            <br />
            Checkerboard CSS: <a target="_blank"
            href="https://stackoverflow.com/questions/35361986/css-gradient-checkerboard-pattern">
            https://stackoverflow.com/questions/35361986/css-gradient-checkerboard-pattern</a>
        </p>
    </div>
);

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

                <AfterImageThumb color0Style={color0Style} />

                <IllusionOfTransparenceThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    colorAverageStyle={colorAverageStyle}
                />

                <AdditiveAndSubtractiveThumb color0Rgb={color0} />

                <SpaceIllusionThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    color0Rgb={color0}
                    color1Rgb={color1}
                />

                <OpticalMixtureThumb color0Rgb={color0} color1Rgb={color1} />

                <BezoldEffectThumb color0Rgb={color0} />

                <ColorIntervalsThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    color0Rgb={color0}
                    color1Rgb={color1}
                />

                <IntersectingColorsThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    colorAverageStyle={colorAverageStyle}
                />

                <HarmonyBarsThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    color2Style={color2Style}
                    color3Style={color3Style}
                />

                <HarmonyBlocksThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    color2Style={color2Style}
                    color3Style={color3Style}
                />

                <HarmonyCirclesThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    color2Style={color2Style}
                    color3Style={color3Style}
                    color4Style={color4Style}
                />

                <HarmonyWigglyBarsThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    color2Style={color2Style}
                    color3Style={color3Style}
                />

                <HarmonyConfettiThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    color2Style={color2Style}
                    color3Style={color3Style}
                    color4Style={color4Style}
                />

                <FilmColorThumb
                    color0Style={color0Style}
                    color1Style={color1Style}
                    color2Style={color2Style}
                    color3Style={color3Style}
                    color0Rgb={color0}
                    color1Rgb={color1}
                    color2Rgb={color2}
                    color3Rgb={color3}
                />

                <TheWeberFechnerLawThumb color0Rgb={color0} />

                <VibratingBoundariesThumb color0Style={color0Style} color1Rgb={color1} />

                <VanishingBoundariesThumb color0Rgb={color0} />
            </div>
        </div>
    );
};

Home = connect(mapStateToProps)(Home);

export default Home;