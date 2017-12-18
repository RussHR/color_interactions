import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import {
    AColorHasManyFaces,
    LighterAndOrDarker,
    FalseGradient,
    Void,
    ReversedGrounds,
    TwoDifferentColorsLookAlike,
    AfterImage,
    IllusionOfTransparence,
    AdditiveAndSubtractive,
    SpaceIllusion,
    OpticalMixture,
    BezoldEffect,
    ColorIntervals,
    IntersectingColors,
    HarmonyBars,
    HarmonyBlocks,
    HarmonyCircles,
    HarmonyWigglyBars,
    HarmonyConfetti
} from './components/plates';

import 'normalize.css';
import './main.scss';

class ColorInteractionsApp extends Component {
    render() {
        return (
            // HashRouter expects one child
            <HashRouter>
                <div>
                    <Route path="/a-color-has-many-faces" component={AColorHasManyFaces} />
                    <Route path="/lighter-and-or-darker" component={LighterAndOrDarker} />
                    <Route path="/false-gradient" component={FalseGradient} />
                    <Route path="/void" component={Void} />
                    <Route path="/reversed-grounds" component={ReversedGrounds} />
                    <Route path="/two-different-colors-look-alike" component={TwoDifferentColorsLookAlike} />
                    <Route path="/after-image" component={AfterImage} />
                    <Route path="/illusion-of-transparence" component={IllusionOfTransparence} />
                    <Route path="/additive-and-subtractive" component={AdditiveAndSubtractive} />
                    <Route path="/space-illusion" component={SpaceIllusion} />
                    <Route path="/optical-mixture" component={OpticalMixture} />
                    <Route path="/bezold-effect" component={BezoldEffect} />
                    <Route path="/color-intervals" component={ColorIntervals} />
                    <Route path="/intersecting-colors" component={IntersectingColors} />
                    <Route path="/harmony-bars" component={HarmonyBars} />
                    <Route path="/harmony-blocks" component={HarmonyBlocks} />
                    <Route path="/harmony-circles" component={HarmonyCircles} />
                    <Route path="/harmony-wiggly-bars" component={HarmonyWigglyBars} />
                    <Route path="/harmony-confetti" component={HarmonyConfetti} />

                    <Route exact path="/" component={Home} />
                </div>
            </HashRouter>
        );
    }
}

export default ColorInteractionsApp;