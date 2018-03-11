import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import Color from 'color';
import classNames from 'classnames';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './vanishing_boundaries.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class VanishingBoundaries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customSecondColor: false
        };

        this.toggleFullControlOverSecondColor = this.toggleFullControlOverSecondColor.bind(this);

        this.modalContents = (
            <p>
                In contrast with <a href="#/vibrating-boundaries">vibrating
                boundaries</a>, boundaries between very similar colors can “vanish” or
                become very difficult to discern. By default, the second color in this
                exercise will be close in hue with a matching saturation and lightness
                (following the <a target="_blank"
                href="https://en.wikipedia.org/wiki/HSL_and_HSV">HSL</a> color scheme)
                to the first color.
                Yet, sometimes it’s still hard to make the boundaries vanish,
                especially when the colors are particularly saturated.
            </p>
        );

        this.similarLightnessColor = this.getSimilarLightnessColor();
    }

    /**
     * Uses math™ to get a color with a similar HSL lightness value as this.props.colors.color0
     * @returns {object}
     */
    getSimilarLightnessColor() {
        const { colors: { color0, color1, color2 } } = this.props;
        const color0Hsl = new Color.rgb(color0, color1, color2).hsl().object();

        return {
            backgroundColor: `hsl(${color0Hsl.h  + (Math.random() * 50) - 25}, ${color0Hsl.s}%, ${color0Hsl.l}%)`
        };
    }

    toggleFullControlOverSecondColor() {
        this.setState({ customSecondColor: !this.state.customSecondColor });
    }

    render() {
        const { colors } = this.props;
        const { color0, color1 } = colors;

        const { customSecondColor } = this.state;

        let colorLabels;
        let secondColorStyle;

        if (customSecondColor) {
            colorLabels = ['color 1', 'color 2'];
            secondColorStyle = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        } else {
            colorLabels = ['color 1'];
            secondColorStyle = this.getSimilarLightnessColor();
        }

        const color0Style = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };

        return (
            <div className="full-screen overflow-hidden">
                <CornerMenu colorLabels={colorLabels} modalContents={this.modalContents}>
                    <label htmlFor="custom-second-color">full control over 2nd color: </label>
                    <input
                        id="custom-second-color"
                        type="checkbox"
                        onChange={this.toggleFullControlOverSecondColor}
                        checked={customSecondColor}
                    />
                </CornerMenu>

                {/* add a transition to the bg color if it auto-changes */}
                <SkewedBar bgColorStyle={color0Style} />
                <SkewedBar bgColorStyle={secondColorStyle} transitionBg={!customSecondColor} />
                <SkewedBar bgColorStyle={color0Style} />
                <SkewedBar bgColorStyle={secondColorStyle} transitionBg={!customSecondColor} />
                <SkewedBar bgColorStyle={color0Style} />
                <SkewedBar bgColorStyle={secondColorStyle} transitionBg={!customSecondColor} />
                <SkewedBar bgColorStyle={color0Style} />
                <SkewedBar bgColorStyle={secondColorStyle} transitionBg={!customSecondColor} />
                <SkewedBar bgColorStyle={color0Style} />
                <SkewedBar bgColorStyle={secondColorStyle} transitionBg={!customSecondColor} />
            </div>
        );
    }
}

VanishingBoundaries.propTypes = {
    colors: validatePropColors(2)
};

VanishingBoundaries = connect(mapStateToProps)(VanishingBoundaries);

export default VanishingBoundaries;

const SkewedBar = ({ bgColorStyle, transitionBg }) => {
    const skewedBarClasses = classNames('VanishingBoundaries__skewedBar', 'full-width', {
        'VanishingBoundaries__skewedBar--transitionBg': transitionBg
    });

    return (
        <div className="VanishingBoundaries__verticalBar full-height display-inline-block">
            <div className={skewedBarClasses} style={bgColorStyle} />
            <div className={skewedBarClasses} style={bgColorStyle} />
            <div className={skewedBarClasses} style={bgColorStyle} />
            <div className={skewedBarClasses} style={bgColorStyle} />
            <div className={skewedBarClasses} style={bgColorStyle} />
            <div className={skewedBarClasses} style={bgColorStyle} />
            <div className={skewedBarClasses} style={bgColorStyle} />
            <div className={skewedBarClasses} style={bgColorStyle} />
            <div className={skewedBarClasses} style={bgColorStyle} />
            <div className={skewedBarClasses} style={bgColorStyle} />
        </div>
    );
};
