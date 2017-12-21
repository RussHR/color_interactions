import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './illusion_of_transparence.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class IllusionOfTransparence extends Component {
    constructor(props) {
        super(props);

        this.state = {
            setOverlappingColor: false
        };

        this.toggleSetOverlappingColor = this.toggleSetOverlappingColor.bind(this);

        this.modalContents = (
            <p>
                From a structural standpoint, there are technically no overlapping colors
                in this exercise, or rather, the colors shown here are completely opaque.
                Yet, it looks as if one “sheet” is overlapping the other. This phenomenon
                can be created when the “overlap” region is a color in between the two others.
            </p>
        );
    }

    /**
     * Toggles the state of whether the middle color is set to color2.
     * @returns {void}
     */
    toggleSetOverlappingColor() {
        this.setState({ setOverlappingColor: !this.state.setOverlappingColor });
    }

    render() {
        const { color0, color1 } = this.props.colors;
        const leftBlockStyle = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const rightBlockStyle = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };

        let overlappingPartStyle;
        let colorLabels = ['left color', 'right color'];

        if (this.state.setOverlappingColor) {
            const { color2 } = this.props.colors;
            overlappingPartStyle = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
            colorLabels.push('overlapping color');
        } else {
            const overlappingPartColor = {
                r: Math.round((color0.r * 0.5) + color1.r * 0.5),
                g: Math.round((color0.g * 0.5) + color1.g * 0.5),
                b: Math.round((color0.b * 0.5) + color1.b * 0.5)
            };
            overlappingPartStyle = {
                backgroundColor: `rgb(${overlappingPartColor.r}, ${overlappingPartColor.g}, ${overlappingPartColor.b})`
            };
        }

        return (
            <div className="full-screen">
                <CornerMenu colorLabels={colorLabels} modalContents={this.modalContents}>
                    <label htmlFor="custom-overlapping-color">custom overlapping color: </label>
                    <input
                        id="custom-overlapping-color"
                        type="checkbox"
                        onChange={this.toggleSetOverlappingColor}
                        checked={this.state.setOverlappingColor}
                    />
                    <br />
                </CornerMenu>
                <div className="half-width full-height display-inline-block position-relative">
                    <div className="position-absolute IllusionOfTransparence__leftBlock" style={leftBlockStyle}>
                        <div
                            className="position-absolute IllusionOfTransparence__leftInnerBlock"
                            style={overlappingPartStyle}
                        />
                    </div>
                </div>
                <div className="half-width full-height display-inline-block position-relative">
                    <div className="position-absolute IllusionOfTransparence__rightBlock" style={rightBlockStyle} />
                </div>
            </div>
        );
    }
}

IllusionOfTransparence.propTypes = {
    colors: validatePropColors(3)
};

IllusionOfTransparence = connect(mapStateToProps)(IllusionOfTransparence);

export default IllusionOfTransparence;