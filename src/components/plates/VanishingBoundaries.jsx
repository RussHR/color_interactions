import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
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
                Wikipedia explains this pretty well: <a
                href="https://en.wikipedia.org/wiki/Bezold_effect" target="_blank">
                https://en.wikipedia.org/wiki/Bezold_effect</a>
                <br />
                Note that the color with white stripes looks lighter that the color with the black stripes,
                but they are in fact the same color.
                <br />
                CSS Pattern by Nicolas Gallagher and found here: <a
                href="http://lea.verou.me/css3patterns/#steps"
                target="_blank">http://lea.verou.me/css3patterns/#steps</a>
            </p>
        );
    }

    /**
     * Toggles whether the user has full control over the second color.
     * @returns {void}
     */
    toggleFullControlOverSecondColor() {
        this.setState({ customSecondColor: !this.state.customSecondColor });
    }

    render() {
        const { colors } = this.props;
        const { color0, color1 } = colors;

        const { customSecondColor } = this.state;

        const colorLabels = this.state.customSecondColor ? ['color 1', 'color 2'] : ['color 1'];

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

                <SkewedBar bgColor={color0} />
                <SkewedBar bgColor={color1} />
                <SkewedBar bgColor={color0} />
                <SkewedBar bgColor={color1} />
                <SkewedBar bgColor={color0} />
                <SkewedBar bgColor={color1} />
                <SkewedBar bgColor={color0} />
                <SkewedBar bgColor={color1} />
                <SkewedBar bgColor={color0} />
                <SkewedBar bgColor={color1} />
            </div>
        );
    }
}

VanishingBoundaries.propTypes = {
    colors: validatePropColors(2)
};

VanishingBoundaries = connect(mapStateToProps)(VanishingBoundaries);

export default VanishingBoundaries;

const SkewedBar = ({ bgColor }) => {
    const bgColorStyle = { backgroundColor: `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})` };

    return (
        <div className="VanishingBoundaries__verticalBar full-height display-inline-block">
            <div className="VanishingBoundaries__skewedBar full-width" style={bgColorStyle} />
            <div className="VanishingBoundaries__skewedBar full-width" style={bgColorStyle} />
            <div className="VanishingBoundaries__skewedBar full-width" style={bgColorStyle} />
            <div className="VanishingBoundaries__skewedBar full-width" style={bgColorStyle} />
            <div className="VanishingBoundaries__skewedBar full-width" style={bgColorStyle} />
            <div className="VanishingBoundaries__skewedBar full-width" style={bgColorStyle} />
            <div className="VanishingBoundaries__skewedBar full-width" style={bgColorStyle} />
            <div className="VanishingBoundaries__skewedBar full-width" style={bgColorStyle} />
            <div className="VanishingBoundaries__skewedBar full-width" style={bgColorStyle} />
            <div className="VanishingBoundaries__skewedBar full-width" style={bgColorStyle} />
        </div>
    );
};
