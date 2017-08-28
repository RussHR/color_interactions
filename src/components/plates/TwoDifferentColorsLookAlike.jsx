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
            rectanglesTouching: false
        };

        this.toggleTouchingInnerBlocks = this.toggleTouchingInnerBlocks.bind(this);
        this.toggleTouchingInnerBlocksViaKeyboard = this.toggleTouchingInnerBlocksViaKeyboard.bind(this);
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
        // if key is 't'
        if (keyCode === 84) {
            this.setState({ rectanglesTouching: !this.state.rectanglesTouching });
        }
    }

    render() {
        const { color0, color1, color2, color3 } = this.props.colors;
        const { rectanglesTouching } = this.state;
        const leftBlockColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const rightBlockColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        const innerBlockLeftColor = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
        const innerBlockRightColor = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };

        const innerBlockClasses = classNames(
            'TwoDifferentColorsLookAlike__innerBlock',
            'position-absolute',
            'standard-transition',
            { 'TwoDifferentColorsLookAlike__innerBlock--touching': rectanglesTouching }
        );

        const bgColor = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };

        return (
            <div className="full-screen">
                <CornerMenu
                    colorLabels={['left background color', 'right background color', 'inner color']}
                    enableRandomAlikeColors={true}
                >
                    <button onClick={this.toggleTouchingInnerBlocks}>touch inner blocks (t)</button>
                    <br/>
                </CornerMenu>
                <div
                    className="half-width full-height display-inline-block overflow-hidden position-relative"
                    style={leftBlockColor}
                >
                    <div className={innerBlockClasses} style={innerBlockLeftColor} />
                </div>
                <div
                    className="half-width full-height display-inline-block overflow-hidden position-relative"
                    style={rightBlockColor}
                >
                    <div className={innerBlockClasses} style={innerBlockRightColor} />
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