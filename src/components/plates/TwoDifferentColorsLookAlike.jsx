import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import classNames from 'classnames';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './two_different_colors_look_alike.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class TwoDifferentColorsLookAlike extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rectanglesTouching: false,
            setInnerBlocksSeparately: false
        };

        this.toggleTouchingInnerBlocks = this.toggleTouchingInnerBlocks.bind(this);
        this.toggleTouchingInnerBlocksViaKeyboard = this.toggleTouchingInnerBlocksViaKeyboard.bind(this);
        this.toggleSetInnerBlocksSeparately = this.toggleSetInnerBlocksSeparately.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.toggleTouchingInnerBlocksViaKeyboard);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.toggleTouchingInnerBlocksViaKeyboard);
    }

    /**
     * Toggles the state of whether the squares are touching.
     * @returns {void}
     */
    toggleTouchingInnerBlocks() {
        this.setState({ rectanglesTouching: !this.state.rectanglesTouching });
    }

    /**
     * Toggles the state of whether the squares are touching via keyboard.
     * @returns {void}
     */
    toggleTouchingInnerBlocksViaKeyboard({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.toggleTouchingInnerBlocks();
        }
    }

    /**
     * Toggles the state of whether the inner blocks are set separately by the user.
     * @returns {void}
     */
    toggleSetInnerBlocksSeparately() {
        this.setState({ setInnerBlocksSeparately: !this.state.setInnerBlocksSeparately });
    }

    render() {
        const { color0, color1, color2 } = this.props.colors;
        const { rectanglesTouching, setInnerBlocksSeparately } = this.state;
        const leftBlockColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const rightBlockColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };

        const innerBlockClasses = classNames(
            'TwoDifferentColorsLookAlike__innerBlock',
            'position-absolute',
            'standard-transition',
            { 'TwoDifferentColorsLookAlike__innerBlock--touching': rectanglesTouching }
        );

        let innerBlockLeftStyle;
        let innerBlockRightStyle;
        const colorLabels = ['left background color', 'right background color'];

        if (setInnerBlocksSeparately) {
            const { color3 } = this.props.colors;
            innerBlockLeftStyle = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
            innerBlockRightStyle = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };

            colorLabels.push('left inner block', 'right inner block');
        } else {
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

            innerBlockLeftStyle = {
                backgroundColor: `rgb(${innerBlockLeftColor.r}, ${innerBlockLeftColor.g}, ${innerBlockLeftColor.b})`
            };
            innerBlockRightStyle = {
                backgroundColor: `rgb(${innerBlockRightColor.r}, ${innerBlockRightColor.g}, ${innerBlockRightColor.b})`
            };

            colorLabels.push('base middle color');
        }



        return (
            <div className="full-screen">
                <CornerMenu colorLabels={colorLabels}>
                    <button onClick={this.toggleTouchingInnerBlocks}>touch inner blocks (k)</button>
                    <br/>
                    <label htmlFor="set-left-right-blocks">set inner block colors separately: </label>
                    <input
                        id="set-left-right-blocks"
                        type="checkbox"
                        onChange={this.toggleSetInnerBlocksSeparately}
                        checked={this.state.setInnerBlocksSeparately}
                    />
                    <br />
                </CornerMenu>
                <div
                    className="half-width full-height display-inline-block overflow-hidden position-relative"
                    style={leftBlockColor}
                >
                    <div className={innerBlockClasses} style={innerBlockLeftStyle} />
                </div>
                <div
                    className="half-width full-height display-inline-block overflow-hidden position-relative"
                    style={rightBlockColor}
                >
                    <div className={innerBlockClasses} style={innerBlockRightStyle} />
                </div>
            </div>
        );
    }
}

TwoDifferentColorsLookAlike.propTypes = {
    colors: validatePropColors(3)
};

TwoDifferentColorsLookAlike = connect(mapStateToProps)(TwoDifferentColorsLookAlike);

export default TwoDifferentColorsLookAlike;